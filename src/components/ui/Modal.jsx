import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useOverlayLock } from '../../hooks/useOverlayLock'

const sizes = {
  sm: 'max-w-lg',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  xl: 'max-w-5xl',
  full: 'max-w-6xl',
}

export default function Modal({
  open,
  onClose,
  children,
  label = 'Dialog',
  size = 'lg',
  align = 'center',
  className = '',
  hideClose = false,
}) {
  useOverlayLock(open)

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] overflow-y-auto bg-[#0A1628]/55 backdrop-blur-[3px] ${
        align === 'top' ? 'pt-[8vh] sm:pt-[11vh]' : ''
      }`}
      onClick={onClose}
      data-lenis-prevent
    >
      <div
        className={`flex min-h-full justify-center p-4 sm:p-6 ${
          align === 'top' ? 'items-start' : 'items-center'
        }`}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={(event) => event.stopPropagation()}
          className={`animate-modal-in relative my-auto w-full border border-[#E2E8F0] bg-white shadow-[0_40px_120px_-40px_rgba(10,22,40,0.55)] ${sizes[size]} ${className}`}
        >
          {!hideClose ? (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center border border-[#E2E8F0] bg-white/95 text-[#0A1628] transition-colors hover:border-[#0A1628] hover:bg-[#0A1628] hover:text-white"
            >
              <X size={16} strokeWidth={1.75} />
            </button>
          ) : null}
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}
