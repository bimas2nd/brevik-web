import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'

function scrollToHash(hash, behavior = 'smooth') {
  if (!hash || hash === '#') return false
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return false

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -84, duration: 1.05 })
  } else {
    el.scrollIntoView({ behavior, block: 'start' })
  }
  return true
}

export function useSmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let lenis = null

    if (!reduceMotion) {
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.35,
      })
      window.__lenis = lenis

      const onScroll = () => ScrollTrigger.update()
      lenis.on('scroll', onScroll)

      const raf = (time) => lenis.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)

      const originalDestroy = lenis.destroy.bind(lenis)
      lenis.destroy = () => {
        gsap.ticker.remove(raf)
        lenis.off('scroll', onScroll)
        originalDestroy()
      }
    }

    const onAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (scrollToHash(hash, reduceMotion ? 'auto' : 'smooth')) {
        event.preventDefault()
      }
    }

    document.addEventListener('click', onAnchorClick)

    const initialHash = window.location.hash
    const hashTimer = initialHash
      ? window.setTimeout(() => {
          const el = document.getElementById(initialHash.slice(1))
          if (!el) return
          if (lenis) {
            lenis.scrollTo(el, { offset: -84, immediate: true })
          } else {
            el.scrollIntoView({ block: 'start' })
          }
          ScrollTrigger.refresh()
        }, 350)
      : null

    return () => {
      document.removeEventListener('click', onAnchorClick)
      if (hashTimer) window.clearTimeout(hashTimer)
      if (lenis) {
        lenis.destroy()
        if (window.__lenis === lenis) delete window.__lenis
      }
    }
  }, [])
}

export { scrollToHash }
