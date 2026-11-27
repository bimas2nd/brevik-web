import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap'

export function useSectionReveal(ref, deps = []) {
  useLayoutEffect(() => {
    if (!ref.current) return undefined

    const context = gsap.context(() => {
      const items = gsap.utils.toArray('[data-reveal]')
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              once: true,
            },
          },
        )
      })

      const rules = gsap.utils.toArray('[data-rule]')
      rules.forEach((rule) => {
        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rule,
              start: 'top 94%',
              once: true,
            },
          },
        )
      })
    }, ref)

    return () => context.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
