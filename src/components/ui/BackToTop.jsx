import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center border border-[#E2E8F0] bg-white text-[#0A1628] shadow-[0_16px_40px_-22px_rgba(10,22,40,0.45)] transition-all duration-300 hover:border-[#0A1628] hover:bg-[#0A1628] hover:text-white sm:bottom-7 sm:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp size={17} strokeWidth={1.8} />
    </button>
  )
}
