import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, FileText, Leaf } from 'lucide-react'
import Container from './ui/Container'
import CountUp from './ui/CountUp'
import SectionEyebrow from './ui/SectionEyebrow'
import DocumentModal from './ui/DocumentModal'
import { sustainability } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { gsap } from '../lib/gsap'

function ProgressBar({ item }) {
  const barRef = useRef(null)

  useEffect(() => {
    const element = barRef.current
    if (!element) return undefined
    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { scaleX: 0 },
        {
          scaleX: item.value / 100,
          transformOrigin: 'left center',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 94%',
            once: true,
          },
        },
      )
    })
    return () => context.revert()
  }, [item.value])

  return (
    <div className="border-b border-[#E2E8F0] py-5 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12.5px] font-medium leading-snug text-[#0A1628]">{item.label}</p>
          <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">{item.note}</p>
        </div>
        <p className="font-mono text-2xl font-medium leading-none tracking-[-0.04em] tabular-nums text-[#0A1628]">
          <CountUp value={item.value} suffix="%" />
        </p>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden bg-[#E2E8F0]">
        <div ref={barRef} className="h-full w-full origin-left bg-[#0052CC]" />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[#059669]">
          <BadgeCheck size={11} />
          {item.assurance}
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">FY2025</span>
      </div>
    </div>
  )
}

export default function SustainabilitySection() {
  const sectionRef = useRef(null)
  const [esgDocumentOpen, setEsgDocumentOpen] = useState(false)
  useSectionReveal(sectionRef)

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      aria-labelledby="sustainability-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-8">
            <SectionEyebrow>{sustainability.eyebrow}</SectionEyebrow>
            <h2
              id="sustainability-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              {sustainability.heading}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="inline-flex items-center gap-2 border border-[#E2E8F0] bg-[#F4F6F9] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#059669]">
              <Leaf size={12} />
              {sustainability.assuranceBadge}
            </span>
            <p className="mt-3 max-w-xs text-[12px] leading-relaxed text-[#475569] lg:ml-auto">
              {sustainability.intro}
            </p>
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden border border-[#E2E8F0] lg:grid-cols-2" data-reveal>
          <div className="relative overflow-hidden bg-[#0A1628] p-7 text-white sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#7DA8F0]">
                  {sustainability.panelKicker}
                </p>
                <span className="border border-white/20 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                  2030
                </span>
              </div>

              <h3 className="mt-8 max-w-md text-2xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl">
                {sustainability.panelHeading}
              </h3>
              <p className="mt-5 max-w-md text-[13px] leading-relaxed text-white/60">{sustainability.panelBody}</p>

              <div className="mt-9 border-t border-white/15">
                {sustainability.milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="grid grid-cols-[52px_1fr] gap-4 border-b border-white/10 py-4 last:border-b-0"
                  >
                    <span className="font-mono text-[11px] tabular-nums text-[#7DA8F0]">{milestone.year}</span>
                    <p className="text-[11.5px] leading-relaxed text-white/70">{milestone.target}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <button
                  type="button"
                  onClick={() => setEsgDocumentOpen(true)}
                  className="group inline-flex h-11 items-center gap-2 border border-white/25 px-5 text-[12px] font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-[#0A1628]"
                >
                  <FileText size={14} />
                  View ESG assurance summary
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                Verified progress
              </p>
              <span className="inline-flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#059669]">
                <Check size={11} />
                Third-party assured
              </span>
            </div>

            <div className="mt-5">
              {sustainability.progress.map((item) => (
                <ProgressBar key={item.label} item={item} />
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0]">
              <div className="bg-[#F4F6F9] p-4">
                <p className="font-mono text-lg font-medium tabular-nums text-[#0A1628]">4.2 TWh</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">
                  New renewable PPAs
                </p>
              </div>
              <div className="bg-[#F4F6F9] p-4">
                <p className="font-mono text-lg font-medium tabular-nums text-[#0A1628]">2030</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">
                  Scope 1 & 2 net zero
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3" data-reveal>
          {sustainability.pillars.map((pillar, index) => (
            <div key={pillar.id} className="flex flex-col border border-[#E2E8F0] bg-white p-6">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  0{index + 1} / {pillar.label}
                </span>
                <ArrowUpRight size={14} className="text-[#CBD5E1]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.02em] text-[#0A1628]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#475569]">{pillar.description}</p>

              <div className="mt-5 border-l-2 border-[#0052CC] bg-[#F4F6F9] px-3 py-2">
                <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#94A3B8]">Measurable target</p>
                <p className="mt-1 text-[11px] font-medium leading-snug text-[#0A1628]">{pillar.metric}</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0]">
                {pillar.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#F8FAFC] p-3">
                    <p className="font-mono text-base font-medium tabular-nums text-[#0A1628]">{stat.value}</p>
                    <p className="mt-0.5 font-mono text-[7.5px] uppercase tracking-[0.08em] text-[#94A3B8]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4" data-reveal>
          <p className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
            Emissions baseline 2019 · Reported under GRI and SASB frameworks
          </p>
          <button
            type="button"
            onClick={() => setEsgDocumentOpen(true)}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
          >
            Download ESG summary
            <ArrowRight size={12} />
          </button>
        </div>
      </Container>

      <DocumentModal
        document={sustainability.esgDocument}
        open={esgDocumentOpen}
        onClose={() => setEsgDocumentOpen(false)}
      />
    </section>
  )
}
