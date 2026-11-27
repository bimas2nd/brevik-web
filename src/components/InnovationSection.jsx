import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, FlaskConical, ShieldCheck } from 'lucide-react'
import Container from './ui/Container'
import SectionEyebrow from './ui/SectionEyebrow'
import { innovation } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { gsap } from '../lib/gsap'

function ReadinessBar({ value }) {
  const barRef = useRef(null)

  useEffect(() => {
    const element = barRef.current
    if (!element) return undefined
    const tween = gsap.fromTo(
      element,
      { scaleX: 0 },
      { scaleX: value / 100, transformOrigin: 'left center', duration: 0.9, ease: 'power3.out' },
    )
    return () => tween.kill()
  }, [value])

  return (
    <div className="mt-2 h-1.5 w-full overflow-hidden bg-[#E2E8F0]">
      <div ref={barRef} className="h-full w-full origin-left bg-[#0052CC]" />
    </div>
  )
}

export default function InnovationSection() {
  const sectionRef = useRef(null)
  const [activeDomainId, setActiveDomainId] = useState(innovation.domains[0].id)
  useSectionReveal(sectionRef)

  const activeDomain = innovation.domains.find((domain) => domain.id === activeDomainId) || innovation.domains[0]

  return (
    <section
      id="innovation"
      ref={sectionRef}
      aria-labelledby="innovation-heading"
      className="border-y border-[#E2E8F0] bg-[#F4F6F9] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <SectionEyebrow>{innovation.eyebrow}</SectionEyebrow>
            <h2
              id="innovation-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              {innovation.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-4">
            <span className="inline-flex items-center gap-2 border border-[#E2E8F0] bg-white px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#0052CC]">
              <ShieldCheck size={12} />
              {innovation.badge}
            </span>
            <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-[#475569]">{innovation.intro}</p>
            <div className="mt-5 grid grid-cols-3 gap-4 border-t border-[#D8DFE8] pt-4">
              {innovation.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-base font-medium tabular-nums leading-none text-[#0A1628]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[7px] uppercase leading-snug tracking-[0.08em] text-[#94A3B8]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-12 lg:gap-8" data-reveal>
          <div className="lg:col-span-4">
            <div className="border-t border-[#D8DFE8]">
              {innovation.domains.map((domain) => {
                const isActive = domain.id === activeDomain.id
                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() => setActiveDomainId(domain.id)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-start gap-3 border-b border-[#D8DFE8] border-l-2 py-4 pl-4 pr-3 text-left transition-colors ${
                      isActive
                        ? 'border-l-[#0052CC] bg-white'
                        : 'border-l-transparent hover:bg-white/60'
                    }`}
                  >
                    <span
                      className={`mt-0.5 font-mono text-[9px] tabular-nums ${
                        isActive ? 'text-[#0052CC]' : 'text-[#94A3B8]'
                      }`}
                    >
                      {domain.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-[13px] font-medium ${isActive ? 'text-[#0A1628]' : 'text-[#475569]'}`}>
                        {domain.label}
                      </span>
                      <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.08em] text-[#94A3B8]">
                        {domain.labs}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={13}
                      className={`mt-0.5 transition-colors ${
                        isActive ? 'text-[#0052CC]' : 'text-[#CBD5E1] group-hover:text-[#64748B]'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">
              <span>Applied research</span>
              <span>FY2026</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div key={activeDomain.id} className="animate-fadeup border border-[#E2E8F0] bg-white p-6 sm:p-8 lg:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  Domain {activeDomain.number} / {activeDomain.label}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[#64748B]">
                  <FlaskConical size={11} />
                  {activeDomain.labs}
                </span>
              </div>

              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#0A1628] sm:text-[1.7rem]">
                {activeDomain.headline}
              </h3>
              <p className="mt-3 max-w-xl text-[12px] leading-relaxed text-[#475569]">{activeDomain.description}</p>

              <div className="mt-6 border-t border-[#E2E8F0]">
                {activeDomain.initiatives.map((initiative) => (
                  <div key={initiative.title} className="border-b border-[#E2E8F0] py-4 last:border-b-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[12px] font-medium text-[#0A1628]">{initiative.title}</p>
                        <p className="mt-0.5 text-[10.5px] leading-relaxed text-[#64748B]">{initiative.detail}</p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] tabular-nums text-[#0052CC]">
                        {initiative.readiness}%
                      </span>
                    </div>
                    <ReadinessBar value={initiative.readiness} />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-px border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-3">
                {activeDomain.metrics.map((metric) => (
                  <div key={metric.label} className="bg-[#F8FAFC] p-3.5">
                    <p className="font-mono text-base font-medium leading-none tracking-[-0.03em] tabular-nums text-[#0A1628]">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 font-mono text-[7px] uppercase tracking-[0.08em] text-[#94A3B8]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#E2E8F0] pt-4">
                <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">
                  Technology readiness level · internal assessment
                </span>
                <a
                  href="#projects"
                  className="inline-flex shrink-0 items-center gap-1.5 text-[10.5px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
                >
                  See it in the field
                  <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6" data-reveal>
          <div className="flex items-center justify-between border-b border-[#D8DFE8] pb-3">
            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#64748B]">
              Research roadmap · 2026-2030
            </p>
            <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">Milestones</span>
          </div>
          <div className="grid gap-px border-x border-b border-[#D8DFE8] bg-[#D8DFE8] md:grid-cols-3">
            {innovation.roadmap.map((milestone, index) => (
              <div key={milestone.year} className="bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tabular-nums text-[#0052CC]">{milestone.year}</span>
                  <span className="font-mono text-[8px] text-[#CBD5E1]">0{index + 1}</span>
                </div>
                <p className="mt-3 text-[12px] font-semibold text-[#0A1628]">{milestone.title}</p>
                <p className="mt-1.5 text-[10.5px] leading-relaxed text-[#64748B]">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
