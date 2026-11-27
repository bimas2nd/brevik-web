import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  Building2,
  Cpu,
  FileText,
  Globe2,
  Hammer,
  Newspaper,
  Search,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react'
import Modal from './Modal'
import { searchIndex } from '../../data/brevikData'
import { useUI } from '../../context/UIContext'
import { scrollToHash } from '../../hooks/useSmoothScroll'

const typeIcons = {
  'Press Release': Newspaper,
  'Operating Business': Building2,
  'Investor Document': FileText,
  'Global Hub': Globe2,
  'Reference Project': Hammer,
  Technology: Cpu,
  Corporate: Building2,
  Report: FileText,
  Sustainability: Sparkles,
  Leadership: Building2,
  Event: TrendingUp,
}

const quickLinks = [
  { id: 'quick-report', type: 'Report', title: '2026 Integrated Annual Report', meta: 'Investor Relations', section: 'investors', action: 'report' },
  { id: 'quick-model', type: 'Corporate', title: 'Brevik Operating Model', meta: 'Originate · Engineer · Operate · Compound', section: 'operating-model' },
  { id: 'quick-projects', type: 'Reference Project', title: 'Selected Projects', meta: 'Reference portfolio · Case studies', section: 'projects' },
  { id: 'quick-grid', type: 'Operating Business', title: 'Grid & Power Systems', meta: 'Operating Business', section: 'businesses' },
  { id: 'quick-innovation', type: 'Technology', title: 'Technology & Innovation', meta: 'Research roadmap · 284 patents', section: 'innovation' },
]

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const { openReport } = useUI()

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      const timer = window.setTimeout(() => inputRef.current?.focus(), 60)
      return () => window.clearTimeout(timer)
    }
    return undefined
  }, [open])

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return quickLinks
    return searchIndex
      .filter((item) => `${item.title} ${item.meta} ${item.type}`.toLowerCase().includes(term))
      .slice(0, 9)
  }, [query])

  const choose = (item) => {
    onClose()
    if (item.action === 'report' || item.id === 'annual-report') {
      window.setTimeout(() => openReport(), 120)
      return
    }
    window.setTimeout(() => scrollToHash(`#${item.section}`), 80)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((current) => Math.min(current + 1, Math.max(results.length - 1, 0)))
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => Math.max(current - 1, 0))
    }
    if (event.key === 'Enter' && results[activeIndex]) {
      event.preventDefault()
      choose(results[activeIndex])
    }
  }

  return (
    <Modal open={open} onClose={onClose} label="Search Brevik Corporation" size="lg" align="top" className="overflow-hidden">
      <div className="border-b border-[#E2E8F0] px-4 pt-4 sm:px-5">
        <div className="flex items-center gap-3 pb-4 pr-10">
          <Search size={19} strokeWidth={1.75} className="shrink-0 text-[#0052CC]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={onKeyDown}
            placeholder="Search releases, divisions, reports, or hubs..."
            aria-label="Search Brevik Corporation"
            className="h-10 w-full bg-transparent text-[15px] font-medium text-[#0A1628] outline-none placeholder:font-normal placeholder:text-[#94A3B8]"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                inputRef.current?.focus()
              }}
              aria-label="Clear search"
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-[#64748B] transition-colors hover:text-[#0A1628]"
            >
              <X size={15} />
            </button>
          ) : (
            <kbd className="hidden shrink-0 border border-[#E2E8F0] bg-[#F4F6F9] px-2 py-1 font-mono text-[10px] text-[#64748B] sm:block">
              ESC
            </kbd>
          )}
        </div>
      </div>

      <div className="max-h-[62vh] overflow-y-auto" data-lenis-prevent>
        <div className="flex items-center justify-between px-4 py-3 sm:px-5">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#64748B]">
            {query ? `${results.length} results` : 'Quick access'}
          </span>
          <span className="font-mono text-[10px] text-[#94A3B8]">
            {query ? 'Filtered index' : 'Corporate index'}
          </span>
        </div>

        {results.length ? (
          <ul className="border-t border-[#E2E8F0]">
            {results.map((item, index) => {
              const Icon = typeIcons[item.type] || FileText
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => choose(item)}
                    className={`flex w-full items-center gap-4 border-b border-[#E2E8F0] px-4 py-4 text-left transition-colors sm:px-5 ${
                      index === activeIndex ? 'bg-[#F4F6F9]' : 'bg-white hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border ${
                        index === activeIndex
                          ? 'border-[#0052CC] bg-white text-[#0052CC]'
                          : 'border-[#E2E8F0] bg-white text-[#475569]'
                      }`}
                    >
                      <Icon size={15} strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-[#0A1628]">{item.title}</span>
                      <span className="mt-0.5 flex flex-wrap items-center gap-x-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#64748B]">
                        <span className="text-[#0052CC]">{item.type}</span>
                        <span className="text-[#CBD5E1]">/</span>
                        <span>{item.meta}</span>
                      </span>
                    </span>
                    <ArrowRight
                      size={15}
                      className={`shrink-0 transition-transform ${
                        index === activeIndex ? 'translate-x-0 text-[#0A1628]' : '-translate-x-1 text-[#CBD5E1]'
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="border-t border-[#E2E8F0] px-6 py-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0052CC]">No results</p>
            <p className="mt-3 text-sm text-[#475569]">
              No corporate records match “{query}”. Try a division, report title, or hub city.
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#E2E8F0] bg-[#F4F6F9] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#64748B] sm:px-5">
        <span className="flex items-center gap-3">
          <span>↑↓ Navigate</span>
          <span className="h-3 w-px bg-[#CBD5E1]" />
          <span>↵ Open</span>
        </span>
        <span>Brevik Corporate Index</span>
      </div>
    </Modal>
  )
}
