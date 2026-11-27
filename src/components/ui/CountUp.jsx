import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

export default function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.7,
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const format = (current) =>
      `${prefix}${Number(current).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`

    element.textContent = format(0)
    const counter = { value: 0 }

    const tween = gsap.to(counter, {
      value,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = format(counter.value)
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 94%',
        once: true,
      },
    })

    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill()
      tween.kill()
    }
  }, [value, decimals, prefix, suffix, duration])

  return (
    <span ref={ref} className={className}>
      {`${prefix}0${suffix}`}
    </span>
  )
}
