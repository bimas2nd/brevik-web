import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useOverlayLock } from '../../hooks/useOverlayLock'

export default function Drawer({ open, onClose, children, label = 'Panel', width = 'max-w-2xl' }) {
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
    <div className="fixed inset-0 z-[100]" data-lenis-prevent>
      <div className="animate-fade-in absolute inset-0 bg-[#0A1628]/55 backdrop-blur-[3px]" onClick={onClose} />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`animate-drawer-in absolute inset-y-0 right-0 flex w-full ${width} flex-col border-l border-[#E2E8F0] bg-white shadow-[-40px_0_120px_-40px_rgba(10,22,40,0.5)]`}
      >
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4 sm:px-8">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#475569]">
            Brevik Corporation
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="inline-flex h-9 w-9 items-center justify-center border border-[#E2E8F0] text-[#0A1628] transition-colors hover:border-[#0A1628] hover:bg-[#0A1628] hover:text-white"
          >
            <X size={16} strokeWidth={1.75} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto" data-lenis-prevent>
          {children}
        </div>
      </aside>
    </div>,
    document.body,
  )
}
