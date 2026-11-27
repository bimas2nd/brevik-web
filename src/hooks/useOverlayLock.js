import { useEffect } from 'react'

export function useOverlayLock(open) {
  useEffect(() => {
    if (!open) return undefined

    const lenis = window.__lenis
    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    if (lenis) lenis.stop()
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      if (lenis) lenis.start()
    }
  }, [open])
}
