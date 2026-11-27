import { useRef } from 'react'
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react'
import Container from './ui/Container'
import CountUp from './ui/CountUp'
import ImageFrame from './ui/ImageFrame'
import SectionEyebrow from './ui/SectionEyebrow'
import { heroKpis, stock } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useUI } from '../context/UIContext'
import { useMarket } from '../context/MarketContext'

const heroImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85'

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { openReport } = useUI()
  const { quote } = useMarket()
  const isPositive = quote.changePercent >= 0
  useSectionReveal(sectionRef)

  return (
    <section ref={sectionRef} aria-labelledby="hero-heading" className="relative overflow-hidden bg-white pb-14 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
      <Container>
        <div data-reveal>
          <SectionEyebrow>Integrated Industrial Infrastructure · Est. 1984</SectionEyebrow>
        </div>

        <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7" data-reveal>
            <h1
              id="hero-heading"
              className="max-w-[14ch] text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-[#0A1628] sm:text-6xl lg:max-w-none lg:text-7xl xl:text-[5.1rem]"
            >
              Engineering the backbone of resilient global systems.
            </h1>

            <div className="mt-9 hidden items-center gap-6 border-t border-[#E2E8F0] pt-5 lg:flex">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#94A3B8]">Zurich</p>
                <p className="mt-1 font-mono text-[11px] tabular-nums text-[#475569]">47.3769° N, 8.5417° E</p>
              </div>
              <span className="h-8 w-px bg-[#E2E8F0]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#94A3B8]">Singapore</p>
                <p className="mt-1 font-mono text-[11px] tabular-nums text-[#475569]">1.3521° N, 103.8198° E</p>
              </div>
              <span className="h-8 w-px bg-[#E2E8F0]" />
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#94A3B8]">Ticker</p>
                <p
                  className={`mt-1 font-mono text-[11px] tabular-nums ${
                    isPositive ? 'text-[#059669]' : 'text-[#DC2626]'
                  }`}
                >
                  {stock.ticker} · ${quote.price.toFixed(2)} · {isPositive ? '+' : ''}
                  {quote.changePercent.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5 lg:pb-1" data-reveal>
            <p className="max-w-md text-[15px] leading-relaxed text-[#475569] sm:text-base">
              Brevik designs, owns, and operates the high-voltage grids, semiconductor cleanroom supply chains, and
              automated port corridors that keep the global economy moving.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href="#businesses"
                className="group inline-flex h-12 items-center justify-center gap-2 bg-[#0052CC] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#003F9C] sm:text-sm"
              >
                Explore Operating Businesses
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={openReport}
                className="group inline-flex h-12 items-center justify-center gap-2 border border-[#E2E8F0] bg-white px-5 text-[13px] font-medium text-[#0A1628] transition-colors hover:border-[#0A1628] sm:text-sm"
              >
                <FileText size={15} strokeWidth={1.8} />
                2026 Annual Report
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#94A3B8]">PDF</span>
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#E2E8F0] pt-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#94A3B8]">Dual headquarters</p>
                <p className="mt-1 text-[13px] font-medium text-[#0A1628]">Zurich · Singapore</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#94A3B8]">Operating platforms</p>
                <p className="mt-1 text-[13px] font-medium text-[#0A1628]">04 integrated divisions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-14" data-reveal>
          <ImageFrame
            src={heroImage}
            alt="Modern corporate architecture and global headquarters district"
            className="aspect-[21/9] w-full rounded-t-lg"
            imgClassName="object-cover"
            caption="Corporate Headquarters District · Zurich, Switzerland"
            badge="Operational"
            eager
          />

          <div className="grid grid-cols-2 overflow-hidden rounded-b-lg border-x border-b border-[#E2E8F0] bg-white lg:grid-cols-4">
            {heroKpis.map((kpi) => (
              <div
                key={kpi.id}
                className="border-b border-[#E2E8F0] p-5 even:border-l even:border-l-[#E2E8F0] lg:border-b-0 lg:border-l lg:border-l-[#E2E8F0] lg:first:border-l-0 lg:p-7 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0"
              >
                <p className="font-mono text-[2rem] font-medium leading-none tracking-[-0.04em] tabular-nums text-[#0A1628] sm:text-[2.35rem]">
                  {kpi.display ? (
                    kpi.display
                  ) : (
                    <CountUp
                      value={kpi.value}
                      decimals={kpi.decimals}
                      prefix={kpi.prefix}
                      suffix={kpi.suffix}
                    />
                  )}
                </p>
                <p className="mt-2.5 text-[12px] font-medium text-[#0A1628]">{kpi.label}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#94A3B8]">{kpi.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#94A3B8]">
          <span>All financial figures FY2025 unless stated. Market data delayed 15 minutes.</span>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-[#475569] transition-colors hover:text-[#0052CC]"
          >
            Investor relations
            <ArrowUpRight size={11} />
          </a>
        </div>
      </Container>
    </section>
  )
}
