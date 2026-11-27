import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, FileText } from 'lucide-react'
import Container from './ui/Container'
import ImageFrame from './ui/ImageFrame'
import SectionEyebrow from './ui/SectionEyebrow'
import { businessUnits } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useUI } from '../context/UIContext'

export default function BusinessUnitsSection() {
  const sectionRef = useRef(null)
  const [activeId, setActiveId] = useState(businessUnits[0].id)
  const { openReport } = useUI()
  useSectionReveal(sectionRef)

  const unit = businessUnits.find((item) => item.id === activeId) || businessUnits[0]

  return (
    <section id="businesses" ref={sectionRef} aria-labelledby="businesses-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <SectionEyebrow>03 / Operating Businesses</SectionEyebrow>
            <h2
              id="businesses-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              Four platforms. One integrated industrial system.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="max-w-md text-[13px] leading-relaxed text-[#475569] sm:text-sm">
              Each division operates with dedicated engineering, delivery, and asset-management teams. Together they
              share procurement scale, capital discipline, and a single standard for operational reliability.
            </p>
          </div>
        </div>

        <div className="-mx-5 mt-10 overflow-x-auto border-y border-[#E2E8F0] sm:mx-0" data-reveal>
          <div className="flex min-w-[760px] lg:min-w-0" role="tablist" aria-label="Operating businesses">
            {businessUnits.map((item) => {
              const isActive = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(item.id)}
                  className={`relative flex flex-1 flex-col gap-1.5 border-b-2 px-5 py-4 text-left transition-colors lg:px-6 lg:py-5 ${
                    isActive
                      ? 'border-b-[#0052CC] bg-white text-[#0A1628]'
                      : 'border-b-transparent bg-white text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0A1628]'
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
                      isActive ? 'text-[#0052CC]' : 'text-[#94A3B8]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="text-[13px] font-medium leading-snug">{item.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div key={unit.id} className="animate-fadeup mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#0052CC]">
              {unit.kicker}
            </p>
            <h3 className="mt-4 max-w-lg text-2xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#0A1628] sm:text-3xl lg:text-[2.3rem]">
              {unit.headline}
            </h3>
            <p className="mt-5 max-w-xl text-[13.5px] leading-relaxed text-[#475569]">{unit.thesis}</p>

            <div className="mt-8 border-t border-[#E2E8F0]">
              {unit.capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className="grid gap-2 border-b border-[#E2E8F0] py-4 sm:grid-cols-[28px_180px_1fr] sm:gap-4"
                >
                  <span className="flex h-6 w-6 items-center justify-center border border-[#E2E8F0] font-mono text-[9px] text-[#0052CC]">
                    0{index + 1}
                  </span>
                  <div className="flex items-start gap-2">
                    <Check size={13} className="mt-0.5 shrink-0 text-[#059669]" />
                    <h4 className="text-[12.5px] font-semibold leading-snug text-[#0A1628]">{capability.title}</h4>
                  </div>
                  <p className="text-[12px] leading-relaxed text-[#475569]">{capability.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4">
              {unit.metrics.map((metric) => (
                <div key={metric.label} className="bg-white p-4">
                  <p className="font-mono text-xl font-medium leading-none tracking-[-0.03em] tabular-nums text-[#0A1628]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-[10.5px] font-medium leading-snug text-[#0A1628]">{metric.label}</p>
                  <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={openReport}
                className="group inline-flex h-11 items-center gap-2 bg-[#0A1628] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#0052CC]"
              >
                <FileText size={14} />
                Review segment strategy
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="#footprint"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#475569] transition-colors hover:text-[#0052CC]"
              >
                View operating hubs
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ImageFrame
              src={unit.image}
              alt={unit.imageAlt}
              className="h-full min-h-[320px] border border-[#E2E8F0] lg:min-h-[540px]"
              caption={unit.imageCaption}
              badge="Operating"
            />
            <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-[#94A3B8]">
              <span>{unit.shortName} / Asset portfolio</span>
              <span>FY2025</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
