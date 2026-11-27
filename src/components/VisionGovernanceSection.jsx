import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import Container from './ui/Container'
import SectionEyebrow from './ui/SectionEyebrow'
import { corporateIdentity } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'

function VisionMission() {
  const { vision, mission, ceoNote } = corporateIdentity

  return (
    <div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#0052CC]">
            {vision.label}
          </p>
          <p className="mt-4 text-xl font-semibold leading-snug tracking-[-0.02em] text-[#0A1628] sm:text-[1.4rem]">
            {vision.statement}
          </p>
          <div className="mt-5 h-px w-full bg-[#E2E8F0]" />
          <p className="mt-5 text-[13px] leading-relaxed text-[#475569]">{vision.body}</p>
        </div>

        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#0052CC]">
            {mission.label}
          </p>
          <p className="mt-4 text-xl font-semibold leading-snug tracking-[-0.02em] text-[#0A1628] sm:text-[1.4rem]">
            {mission.statement}
          </p>
          <div className="mt-5 h-px w-full bg-[#E2E8F0]" />
          <p className="mt-5 text-[13px] leading-relaxed text-[#475569]">{mission.body}</p>
        </div>
      </div>

      <div className="mt-10 border-l-2 border-[#0052CC] bg-[#F4F6F9] p-6 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#64748B]">Executive note</p>
        <blockquote className="mt-4 text-[15px] font-medium leading-relaxed text-[#0A1628] sm:text-base">
          “{ceoNote.quote}”
        </blockquote>
        <div className="mt-5 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-[#0A1628] font-mono text-[10px] font-medium text-white">
            AM
          </span>
          <div>
            <p className="text-[12px] font-semibold text-[#0A1628]">{ceoNote.name}</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#64748B]">{ceoNote.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CoreValues() {
  return (
    <div>
      <div className="flex flex-col gap-2 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#0052CC]">
            Operating principles
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[#0A1628]">
            Four standards that govern every decision.
          </h3>
        </div>
        <p className="max-w-xs font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-[#94A3B8]">
          Reviewed annually by the Governance & Nominating Committee
        </p>
      </div>

      <div>
        {corporateIdentity.values.map((value) => (
          <div
            key={value.number}
            className="group grid gap-4 border-b border-[#E2E8F0] py-6 transition-colors hover:bg-[#F8FAFC] sm:grid-cols-[72px_1fr_auto] sm:items-start sm:px-2"
          >
            <span className="font-mono text-[11px] tabular-nums text-[#0052CC]">{value.number}</span>
            <div>
              <h4 className="text-[15px] font-semibold text-[#0A1628]">{value.title}</h4>
              <p className="mt-1.5 max-w-xl text-[12.5px] leading-relaxed text-[#475569]">{value.description}</p>
            </div>
            <ArrowUpRight
              size={16}
              className="hidden text-[#CBD5E1] transition-colors group-hover:text-[#0052CC] sm:block"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Governance() {
  const { governance } = corporateIdentity

  return (
    <div>
      <div className="flex flex-col gap-2 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#0052CC]">
            Compliance framework
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[#0A1628]">
            Independent oversight, measurable controls.
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#059669]">
          <ShieldCheck size={12} />
          FY2025 reviewed
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4">
        {governance.stats.map((stat) => (
          <div key={stat.label} className="bg-white p-4 sm:p-5">
            <p className="font-mono text-2xl font-medium leading-none tracking-[-0.04em] tabular-nums text-[#0A1628]">
              {stat.value}
            </p>
            <p className="mt-2 text-[10.5px] leading-snug text-[#475569]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {governance.frameworks.map((framework, index) => (
          <div
            key={framework.title}
            className="grid gap-3 border-b border-[#E2E8F0] py-5 last:border-b-0 sm:grid-cols-[28px_220px_1fr] sm:gap-5"
          >
            <span className="flex h-6 w-6 items-center justify-center border border-[#E2E8F0] font-mono text-[9px] text-[#0052CC]">
              0{index + 1}
            </span>
            <div className="flex items-center gap-2">
              <Check size={13} className="text-[#059669]" />
              <h4 className="text-[13px] font-semibold text-[#0A1628]">{framework.title}</h4>
            </div>
            <p className="text-[12px] leading-relaxed text-[#475569]">{framework.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#94A3B8]">
          Code of Business Conduct · 100% annual attestation
        </p>
        <a
          href="#leadership"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
        >
          Board biographies
          <ArrowRight size={12} />
        </a>
      </div>
    </div>
  )
}

export default function VisionGovernanceSection() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState('vision')
  useSectionReveal(sectionRef)

  return (
    <section
      id="company"
      ref={sectionRef}
      aria-labelledby="identity-heading"
      className="border-y border-[#E2E8F0] bg-[#F4F6F9] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24" data-reveal>
              <SectionEyebrow>{corporateIdentity.eyebrow}</SectionEyebrow>
              <h2
                id="identity-heading"
                className="mt-5 max-w-sm text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.65rem]"
              >
                {corporateIdentity.heading}
              </h2>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[#475569]">{corporateIdentity.intro}</p>

              <div className="mt-8 border-t border-[#CBD5E1]">
                {corporateIdentity.tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={isActive}
                      className={`group flex w-full items-center justify-between border-b border-[#D8DFE8] py-4 pl-4 text-left transition-colors ${
                        isActive ? 'border-l-2 border-l-[#0052CC] bg-white/70 pl-4' : 'border-l-2 border-l-transparent'
                      }`}
                    >
                      <span className="flex items-baseline gap-3">
                        <span
                          className={`font-mono text-[10px] tabular-nums ${
                            isActive ? 'text-[#0052CC]' : 'text-[#94A3B8]'
                          }`}
                        >
                          {tab.number}
                        </span>
                        <span
                          className={`text-[13px] font-medium transition-colors ${
                            isActive ? 'text-[#0A1628]' : 'text-[#475569] group-hover:text-[#0A1628]'
                          }`}
                        >
                          {tab.label}
                        </span>
                      </span>
                      <ArrowRight
                        size={14}
                        className={`transition-all ${
                          isActive
                            ? 'translate-x-0 text-[#0052CC]'
                            : '-translate-x-1 text-transparent group-hover:translate-x-0 group-hover:text-[#94A3B8]'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-[#94A3B8]">
                <span>Last reviewed · 14 Mar 2026</span>
                <span>Zurich</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8" data-reveal>
            <div className="border border-[#E2E8F0] bg-white p-6 sm:p-10 lg:p-12">
              <div key={activeTab} className="animate-fadeup">
                {activeTab === 'vision' ? <VisionMission /> : null}
                {activeTab === 'values' ? <CoreValues /> : null}
                {activeTab === 'governance' ? <Governance /> : null}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
