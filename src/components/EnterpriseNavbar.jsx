import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Globe2,
  Menu,
  Search,
  TrendingDown,
  TrendingUp,
  X,
} from 'lucide-react'
import Container from './ui/Container'
import BrevikMark from './ui/BrevikMark'
import SearchModal from './ui/SearchModal'
import { megaMenus, stock } from '../data/brevikData'
import { useUI } from '../context/UIContext'
import { useMarket } from '../context/MarketContext'

function MegaPanel({ menu, onNavigate }) {
  const { openReport } = useUI()

  const handleFeatured = () => {
    onNavigate()
    openReport()
  }

  return (
    <div className="absolute left-0 right-0 top-full border-b border-[#E2E8F0] bg-white shadow-[0_28px_60px_-32px_rgba(10,22,40,0.35)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#0052CC]" />
      <Container className="py-8 lg:py-9">
        <div className="grid gap-9 lg:grid-cols-12 lg:gap-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {menu.columns.map((column) => (
              <div key={column.title}>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={onNavigate}
                        className="group flex items-start justify-between gap-4 border-b border-transparent py-2.5 transition-colors hover:border-[#E2E8F0]"
                      >
                        <span>
                          <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#0A1628] transition-colors group-hover:text-[#0052CC]">
                            {link.label}
                            <ArrowUpRight
                              size={12}
                              className="opacity-0 transition-opacity group-hover:opacity-100"
                            />
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-[#64748B]">
                            {link.description}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
              Featured publication
            </p>
            <button
              type="button"
              onClick={handleFeatured}
              className="group mt-4 flex w-full flex-col border border-[#E2E8F0] bg-[#F4F6F9] text-left transition-colors hover:border-[#0A1628]"
            >
              <div className="relative overflow-hidden bg-[#0A1628] p-5 text-white">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#7DA8F0]">
                      {menu.featured.kicker}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-tight tracking-[-0.02em] text-white">
                      {menu.featured.title}
                    </p>
                  </div>
                  <span className="flex h-10 w-8 items-center justify-center border border-white/25 bg-white/5 font-mono text-[9px] font-medium text-white/70">
                    BVK
                  </span>
                </div>
                <p className="relative mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                  {menu.featured.meta}
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="text-[12px] leading-relaxed text-[#475569]">{menu.featured.description}</p>
                <span className="mt-4 flex items-center gap-2 text-[11px] font-medium text-[#0A1628]">
                  Open interactive report
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function EnterpriseNavbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const headerRef = useRef(null)
  const { openContact } = useUI()
  const { quote, series } = useMarket()

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollY > 8)
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  const activeMenu = megaMenus.find((menu) => menu.id === openMenu)
  const isPositive = quote.changePercent >= 0
  const seriesMin = Math.min(...series)
  const seriesMax = Math.max(...series)
  const seriesRange = seriesMax - seriesMin || 1
  const sparklinePoints = series
    .map((value, index) => {
      const x = (index / Math.max(series.length - 1, 1)) * 56
      const y = 18 - ((value - seriesMin) / seriesRange) * 14 - 2
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')

  const handleContact = () => {
    setOpenMenu(null)
    setMobileOpen(false)
    openContact('Enterprise Partnership')
  }

  const closeNavigation = () => {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  return (
    <>
      <div className="bg-[#0A1628] text-white">
        <Container className="flex h-9 items-center justify-between">
          <div className="flex min-w-0 items-center gap-3 font-mono text-[10px] sm:gap-4 sm:text-[11px]">
            <span className="shrink-0 tracking-[0.08em] text-white/65">NYSE: BVK</span>
            <span className="shrink-0 font-medium tabular-nums tracking-tight text-white">
              ${quote.price.toFixed(2)}
            </span>
            <span
              className={`flex shrink-0 items-center gap-1 font-medium tabular-nums ${
                isPositive ? 'text-[#34D399]' : 'text-[#F87171]'
              }`}
            >
              {isPositive ? <TrendingUp size={11} strokeWidth={2.2} /> : <TrendingDown size={11} strokeWidth={2.2} />}
              {isPositive ? '+' : ''}
              {quote.changePercent.toFixed(2)}%
            </span>
            <svg
              viewBox="0 0 56 20"
              className="hidden h-4 w-14 shrink-0 sm:block"
              aria-hidden="true"
              title="Simulated intraday price trend"
            >
              <polyline
                points={sparklinePoints}
                fill="none"
                stroke={isPositive ? '#34D399' : '#F87171'}
                strokeWidth="1.15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden shrink-0 text-white/40 sm:inline">{stock.note}</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] sm:gap-4 sm:text-[11px]">
            <a href="#investors" className="hidden font-medium text-white/70 transition-colors hover:text-white sm:inline">
              Investors
            </a>
            <span className="hidden h-3 w-px bg-white/20 sm:inline" />
            <a href="#leadership" className="hidden font-medium text-white/70 transition-colors hover:text-white md:inline">
              Careers <span className="font-normal text-white/40">(142 Open Roles)</span>
            </a>
            <span className="hidden h-3 w-px bg-white/20 md:inline" />
            <span className="flex items-center gap-1.5 text-white/70">
              <Globe2 size={11} strokeWidth={1.8} />
              Global · EN
            </span>
          </div>
        </Container>
      </div>

      <header
        ref={headerRef}
        onMouseLeave={() => {
          if (window.matchMedia('(min-width: 1024px)').matches) setOpenMenu(null)
        }}
        className={`sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md transition-shadow ${
          scrolled ? 'shadow-[0_8px_30px_-24px_rgba(10,22,40,0.4)]' : ''
        }`}
      >
        <Container className="relative flex h-[72px] items-center justify-between">
          <a
            href="#top"
            onClick={closeNavigation}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Brevik Corporation home"
          >
            <BrevikMark size={34} className="transition-transform duration-300 group-hover:scale-[1.03]" />
            <span className="flex flex-col">
              <span className="text-[15px] font-bold leading-none tracking-[0.14em] text-[#0A1628] sm:text-[17px]">
                BREVIK
              </span>
              <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.28em] text-[#64748B]">
                Corporation
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {megaMenus.map((menu) => (
              <button
                key={menu.id}
                type="button"
                onMouseEnter={() => setOpenMenu(menu.id)}
                onClick={() => setOpenMenu((current) => (current === menu.id ? null : menu.id))}
                aria-expanded={openMenu === menu.id}
                className={`relative flex h-[72px] items-center gap-1.5 px-3.5 text-[13px] font-medium transition-colors xl:px-4 ${
                  openMenu === menu.id ? 'text-[#0052CC]' : 'text-[#0A1628] hover:text-[#0052CC]'
                }`}
              >
                {menu.label}
                <ChevronDown
                  size={13}
                  strokeWidth={1.8}
                  className={`text-[#94A3B8] transition-transform duration-200 ${
                    openMenu === menu.id ? 'rotate-180 text-[#0052CC]' : ''
                  }`}
                />
                <span
                  className={`absolute inset-x-3 bottom-0 h-[2px] transition-colors ${
                    openMenu === menu.id ? 'bg-[#0052CC]' : 'bg-transparent'
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setOpenMenu(null)
                setMobileOpen(false)
                setSearchOpen(true)
              }}
              aria-label="Search Brevik Corporation"
              className="inline-flex h-10 w-10 items-center justify-center border border-transparent text-[#0A1628] transition-colors hover:border-[#E2E8F0] hover:bg-[#F4F6F9]"
            >
              <Search size={18} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={handleContact}
              className="hidden h-10 items-center gap-2 bg-[#0A1628] px-4 text-[12px] font-medium text-white transition-colors hover:bg-[#0052CC] sm:inline-flex lg:px-5"
            >
              Contact
              <ArrowUpRight size={14} />
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current)
                setOpenMenu(null)
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E8F0] text-[#0A1628] transition-colors hover:bg-[#F4F6F9] lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[2px] origin-left bg-[#0052CC] transition-opacity ${
            mobileOpen ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ transform: `scaleX(${progress})` }}
        />

        {activeMenu ? <MegaPanel menu={activeMenu} onNavigate={() => setOpenMenu(null)} /> : null}

        {mobileOpen ? (
          <div className="border-b border-[#E2E8F0] bg-white lg:hidden">
            <div className="max-h-[calc(100vh-116px)] overflow-y-auto" data-lenis-prevent>
              {megaMenus.map((menu) => (
                <div key={menu.id} className="border-b border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => setMobileAccordion((current) => (current === menu.id ? null : menu.id))}
                    aria-expanded={mobileAccordion === menu.id}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-[15px] font-medium text-[#0A1628]"
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className={`text-[#94A3B8] transition-transform ${
                        mobileAccordion === menu.id ? 'rotate-180 text-[#0052CC]' : ''
                      }`}
                    />
                  </button>
                  {mobileAccordion === menu.id ? (
                    <div className="space-y-5 px-5 pb-5">
                      {menu.columns.map((column) => (
                        <div key={column.title}>
                          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#94A3B8]">
                            {column.title}
                          </p>
                          <div className="mt-2 space-y-0.5">
                            {column.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                onClick={closeNavigation}
                                className="flex items-center justify-between border-b border-[#F1F5F9] py-2.5 text-[13px] text-[#334155]"
                              >
                                {link.label}
                                <ArrowUpRight size={13} className="text-[#94A3B8]" />
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <div className="space-y-3 p-5">
                <button
                  type="button"
                  onClick={handleContact}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 bg-[#0A1628] px-4 text-sm font-medium text-white"
                >
                  Contact Brevik
                  <ArrowRight size={15} />
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#investors"
                    onClick={closeNavigation}
                    className="inline-flex h-10 items-center justify-center border border-[#E2E8F0] text-[12px] font-medium text-[#0A1628]"
                  >
                    Investors
                  </a>
                  <a
                    href="#newsroom"
                    onClick={closeNavigation}
                    className="inline-flex h-10 items-center justify-center border border-[#E2E8F0] text-[12px] font-medium text-[#0A1628]"
                  >
                    Newsroom
                  </a>
                </div>
                <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <FileText size={12} />
                    FY2026 reporting
                  </span>
                  <span>NYSE: BVK</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
