import { useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Download,
  FileText,
  TrendingUp,
} from 'lucide-react'
import Container from './ui/Container'
import SectionEyebrow from './ui/SectionEyebrow'
import DocumentModal from './ui/DocumentModal'
import {
  financialCalendar,
  financialDocs,
  financialMetrics,
  financialYears,
} from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useUI } from '../context/UIContext'
import { useMarket } from '../context/MarketContext'

const CHART = {
  width: 680,
  height: 320,
  left: 54,
  right: 660,
  top: 22,
  bottom: 268,
}

function formatValue(value, metric, withSuffix = true) {
  return `${metric.prefix}${Number(value).toFixed(metric.decimals)}${withSuffix ? metric.suffix : ''}`
}

function niceMax(values) {
  const rawMax = Math.max(...values)
  const magnitude = 10 ** (Math.floor(Math.log10(rawMax)) - 1)
  return Math.ceil((rawMax * 1.12) / magnitude) * magnitude
}

export default function InvestorRelationsSection() {
  const sectionRef = useRef(null)
  const [activeMetricId, setActiveMetricId] = useState('revenue')
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeDocument, setActiveDocument] = useState(null)
  const { openContact, openReport } = useUI()
  const { quote } = useMarket()
  const isPositive = quote.changePercent >= 0
  useSectionReveal(sectionRef)

  const metric = financialMetrics.find((item) => item.id === activeMetricId) || financialMetrics[0]
  const lastIndex = metric.values.length - 1
  const displayIndex = hoveredIndex ?? lastIndex
  const chartMax = useMemo(() => niceMax(metric.values), [metric])
  const chartHeight = CHART.bottom - CHART.top
  const step = (CHART.right - CHART.left) / metric.values.length
  const barWidth = Math.min(58, step * 0.5)

  const barX = (index) => CHART.left + step * index + (step - barWidth) / 2
  const barHeight = (value) => (value / chartMax) * chartHeight
  const barY = (value) => CHART.bottom - barHeight(value)
  const barCenter = (index) => barX(index) + barWidth / 2

  const previousValue = displayIndex > 0 ? metric.values[displayIndex - 1] : null
  const displayGrowth = previousValue
    ? ((metric.values[displayIndex] - previousValue) / previousValue) * 100
    : null
  const latestGrowth = ((metric.values[lastIndex] - metric.values[lastIndex - 1]) / metric.values[lastIndex - 1]) * 100

  const trendPoints = metric.values
    .map((value, index) => `${barCenter(index)},${barY(value) - 8}`)
    .join(' ')

  const tooltipLeft = Math.min(Math.max((barCenter(displayIndex) / CHART.width) * 100, 14), 86)

  return (
    <section
      id="investors"
      ref={sectionRef}
      aria-labelledby="investors-heading"
      className="border-y border-[#E2E8F0] bg-[#F4F6F9] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-8">
            <SectionEyebrow>06 / Investor Relations</SectionEyebrow>
            <h2
              id="investors-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              Performance with the discipline to compound.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-4 border border-[#E2E8F0] bg-white px-4 py-3">
              <div className="text-left">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#94A3B8]">NYSE: BVK</p>
                <p className="font-mono text-base font-medium tabular-nums text-[#0A1628]">
                  ${quote.price.toFixed(2)}
                </p>
              </div>
              <span className="h-8 w-px bg-[#E2E8F0]" />
              <span
                className={`flex items-center gap-1 font-mono text-[11px] tabular-nums ${
                  isPositive ? 'text-[#059669]' : 'text-[#DC2626]'
                }`}
              >
                <TrendingUp size={12} className={isPositive ? '' : 'rotate-180'} />
                {isPositive ? '+' : ''}
                {quote.changePercent.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12" data-reveal>
          <div className="border border-[#E2E8F0] bg-white p-5 sm:p-7 lg:col-span-7 lg:p-8">
            <div className="flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  Financial performance
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#94A3B8]">
                  FY2022 - FY2026E · USD
                </p>
              </div>
              <div className="inline-flex w-full border border-[#E2E8F0] bg-[#F4F6F9] p-0.5 sm:w-auto">
                {financialMetrics.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveMetricId(item.id)
                      setHoveredIndex(null)
                    }}
                    aria-pressed={activeMetricId === item.id}
                    className={`flex-1 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] transition-colors sm:flex-none ${
                      activeMetricId === item.id
                        ? 'bg-white text-[#0A1628] shadow-sm'
                        : 'text-[#64748B] hover:text-[#0A1628]'
                    }`}
                  >
                    {item.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium text-[#64748B]">
                  {metric.label} · {financialYears[displayIndex]}
                </p>
                <p className="mt-1 font-mono text-[2.5rem] font-medium leading-none tracking-[-0.045em] tabular-nums text-[#0A1628] sm:text-[2.9rem]">
                  {formatValue(metric.values[displayIndex], metric)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">
                  {previousValue ? 'YoY growth' : 'Baseline year'}
                </p>
                <p
                  className={`mt-1 font-mono text-sm tabular-nums ${
                    displayGrowth === null ? 'text-[#64748B]' : displayGrowth >= 0 ? 'text-[#059669]' : 'text-[#DC2626]'
                  }`}
                >
                  {displayGrowth === null ? '—' : `${displayGrowth >= 0 ? '+' : ''}${displayGrowth.toFixed(1)}%`}
                </p>
              </div>
            </div>

            <div className="relative mt-2" onMouseLeave={() => setHoveredIndex(null)}>
              {hoveredIndex !== null ? (
                <div
                  className="pointer-events-none absolute top-1 z-10 w-[142px] -translate-x-1/2 border border-[#E2E8F0] bg-white p-3 shadow-[0_16px_40px_-20px_rgba(10,22,40,0.45)]"
                  style={{ left: `${tooltipLeft}%` }}
                >
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">
                    {financialYears[hoveredIndex]}
                  </p>
                  <p className="mt-1 font-mono text-base font-medium tabular-nums text-[#0A1628]">
                    {formatValue(metric.values[hoveredIndex], metric)}
                  </p>
                  <div className="mt-2 flex items-center justify-between border-t border-[#E2E8F0] pt-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">YoY</span>
                    <span className="font-mono text-[10px] tabular-nums text-[#059669]">
                      {hoveredIndex === 0
                        ? '—'
                        : `+${(((metric.values[hoveredIndex] - metric.values[hoveredIndex - 1]) / metric.values[hoveredIndex - 1]) * 100).toFixed(1)}%`}
                    </span>
                  </div>
                </div>
              ) : null}

              <svg
                viewBox={`0 0 ${CHART.width} ${CHART.height}`}
                className="h-auto w-full"
                role="img"
                aria-label={`${metric.label} from FY2022 to FY2026 estimated`}
              >
                {[0, 1, 2, 3, 4].map((tick) => {
                  const y = CHART.top + (chartHeight / 4) * tick
                  const value = chartMax - (chartMax / 4) * tick
                  return (
                    <g key={tick}>
                      <line
                        x1={CHART.left}
                        y1={y}
                        x2={CHART.right}
                        y2={y}
                        stroke="#E2E8F0"
                        strokeWidth="0.8"
                        strokeDasharray={tick === 4 ? '0' : '3 5'}
                      />
                      <text
                        x={CHART.left - 10}
                        y={y + 3}
                        textAnchor="end"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="7.5"
                        fill="#94A3B8"
                      >
                        {value.toFixed(metric.decimals)}
                      </text>
                    </g>
                  )
                })}

                <line
                  x1={CHART.left}
                  y1={CHART.bottom}
                  x2={CHART.right}
                  y2={CHART.bottom}
                  stroke="#0A1628"
                  strokeWidth="1"
                />

                <polyline
                  points={trendPoints}
                  fill="none"
                  stroke="#0052CC"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                  opacity="0.55"
                />

                {metric.values.map((value, index) => {
                  const x = barX(index)
                  const height = barHeight(value)
                  const y = barY(value)
                  const isHovered = hoveredIndex === index
                  return (
                    <g
                      key={`${metric.id}-${financialYears[index]}`}
                      tabIndex={0}
                      role="button"
                      aria-label={`${financialYears[index]}: ${formatValue(value, metric)}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onFocus={() => setHoveredIndex(index)}
                      onClick={() => setHoveredIndex(index)}
                      className="cursor-pointer outline-none"
                    >
                      <rect
                        x={x - step * 0.16}
                        y={CHART.top}
                        width={barWidth + step * 0.32}
                        height={chartHeight}
                        fill="transparent"
                      />
                      <rect
                        x={x}
                        y={y}
                        width={barWidth}
                        height={height}
                        fill={isHovered ? '#0052CC' : '#0A1628'}
                        opacity={isHovered ? 1 : 0.92}
                      />
                      <rect x={x} y={y} width={barWidth} height="2.5" fill={isHovered ? '#7DA8F0' : '#0052CC'} />
                      <text
                        x={x + barWidth / 2}
                        y={y - 9}
                        textAnchor="middle"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="8"
                        fill={isHovered ? '#0052CC' : '#475569'}
                      >
                        {formatValue(value, metric)}
                      </text>
                      <text
                        x={x + barWidth / 2}
                        y={CHART.bottom + 20}
                        textAnchor="middle"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="8.5"
                        fill={isHovered ? '#0A1628' : '#64748B'}
                      >
                        {financialYears[index]}
                      </text>
                      {index === metric.values.length - 1 ? (
                        <text
                          x={x + barWidth / 2}
                          y={CHART.bottom + 32}
                          textAnchor="middle"
                          fontFamily="IBM Plex Mono, monospace"
                          fontSize="7"
                          fill="#94A3B8"
                        >
                          GUIDANCE
                        </text>
                      ) : null}
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="mt-4 grid gap-3 border-t border-[#E2E8F0] pt-5 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#94A3B8]">Latest value</p>
                <p className="mt-1 font-mono text-[13px] font-medium tabular-nums text-[#0A1628]">
                  {formatValue(metric.values[lastIndex], metric)}
                </p>
              </div>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#94A3B8]">YoY growth</p>
                <p className="mt-1 font-mono text-[13px] font-medium tabular-nums text-[#059669]">
                  +{latestGrowth.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#94A3B8]">FY2026 guidance</p>
                <p className="mt-1 font-mono text-[13px] font-medium tabular-nums text-[#0A1628]">{metric.guidance}</p>
              </div>
            </div>

            <p className="mt-4 border-t border-[#E2E8F0] pt-3 font-mono text-[8.5px] leading-relaxed tracking-[0.02em] text-[#94A3B8]">
              {metric.note} Figures presented in USD billions unless stated.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col border border-[#E2E8F0] bg-white">
              <div className="border-b border-[#E2E8F0] px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                    Financial calendar
                  </p>
                  <CalendarDays size={14} className="text-[#94A3B8]" />
                </div>
                <div className="mt-3">
                  {financialCalendar.map((event) => (
                    <div
                      key={event.label}
                      className="flex items-center justify-between gap-3 border-b border-[#F1F5F9] py-2.5 last:border-b-0"
                    >
                      <span className="w-[86px] shrink-0 font-mono text-[9px] uppercase tracking-[0.06em] tabular-nums text-[#64748B]">
                        {event.date}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[11.5px] font-medium text-[#0A1628]">{event.label}</span>
                        <span className="block text-[9.5px] text-[#94A3B8]">{event.location}</span>
                      </span>
                      <span className="shrink-0 border border-[#E2E8F0] px-1.5 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.08em] text-[#64748B]">
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                    Document center
                  </p>
                  <Download size={14} className="text-[#94A3B8]" />
                </div>
                <div className="mt-2">
                  {financialDocs.map((document) => (
                    <button
                      key={document.id}
                      type="button"
                      onClick={() => setActiveDocument(document)}
                      className="group flex w-full items-start gap-3 border-b border-[#F1F5F9] py-3 text-left transition-colors last:border-b-0 hover:bg-[#F8FAFC]"
                    >
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#E2E8F0] bg-[#F4F6F9] text-[#475569] transition-colors group-hover:border-[#0052CC] group-hover:text-[#0052CC]">
                        <FileText size={14} strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11.5px] font-medium leading-snug text-[#0A1628] transition-colors group-hover:text-[#0052CC]">
                          {document.title}
                        </span>
                        <span className="mt-0.5 block font-mono text-[8.5px] uppercase tracking-[0.08em] text-[#94A3B8]">
                          {document.category} · {document.format} · {document.size}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={13}
                        className="mt-1 shrink-0 text-[#CBD5E1] transition-colors group-hover:text-[#0052CC]"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E2E8F0] px-5 py-4 sm:px-6">
                <button
                  type="button"
                  onClick={openReport}
                  className="group flex w-full items-center justify-between text-left"
                >
                  <span>
                    <span className="block text-[11.5px] font-medium text-[#0A1628]">
                      2026 Integrated Annual Report
                    </span>
                    <span className="mt-0.5 block font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
                      Interactive executive preview
                    </span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="text-[#475569] transition-transform group-hover:translate-x-0.5 group-hover:text-[#0052CC]"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => openContact('Investor Relations')}
                  className="mt-3 inline-flex w-full items-center justify-center border border-[#E2E8F0] py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#475569] transition-colors hover:border-[#0A1628] hover:text-[#0A1628]"
                >
                  Investor relations contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <DocumentModal document={activeDocument} open={Boolean(activeDocument)} onClose={() => setActiveDocument(null)} />
    </section>
  )
}
