import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import Container from './ui/Container'
import SectionEyebrow from './ui/SectionEyebrow'
import { operatingModel } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'

export default function OperatingModelSection() {
  const sectionRef = useRef(null)
  const [activeStepId, setActiveStepId] = useState(operatingModel.steps[0].id)
  useSectionReveal(sectionRef)

  const activeStep = operatingModel.steps.find((step) => step.id === activeStepId) || operatingModel.steps[0]
  const activeIndex = operatingModel.steps.findIndex((step) => step.id === activeStep.id)

  return (
    <section
      id="operating-model"
      ref={sectionRef}
      aria-labelledby="operating-model-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <SectionEyebrow>{operatingModel.eyebrow}</SectionEyebrow>
            <h2
              id="operating-model-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              {operatingModel.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="max-w-md text-[13px] leading-relaxed text-[#475569] sm:text-sm">{operatingModel.intro}</p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
              System cycle · 04 disciplines
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8" data-reveal>
          <div className="lg:col-span-5">
            <div className="border-t border-[#E2E8F0]">
              {operatingModel.steps.map((step) => {
                const isActive = step.id === activeStep.id
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStepId(step.id)}
                    aria-pressed={isActive}
                    className={`group grid w-full grid-cols-[38px_1fr_auto] items-start gap-4 border-b border-[#E2E8F0] py-5 pl-4 pr-3 text-left transition-colors ${
                      isActive
                        ? 'border-l-2 border-l-[#0052CC] bg-[#F4F6F9]'
                        : 'border-l-2 border-l-transparent hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tabular-nums ${
                        isActive ? 'text-[#0052CC]' : 'text-[#94A3B8]'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span>
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        <span className={`text-[15px] font-semibold ${isActive ? 'text-[#0A1628]' : 'text-[#334155]'}`}>
                          {step.title}
                        </span>
                        <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#94A3B8]">
                          {step.label}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-[11.5px] leading-relaxed text-[#64748B]">
                        {step.statement}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`mt-1 transition-all ${
                        isActive ? 'text-[#0052CC]' : 'text-[#CBD5E1] group-hover:text-[#64748B]'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
              <span>Operating discipline</span>
              <span>Group-wide standard</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex h-full flex-col border border-[#E2E8F0] bg-[#F4F6F9] p-6 sm:p-8 lg:p-9">
              <div className="border-b border-[#D8DFE8] pb-6">
                <div className="relative">
                  <div className="absolute left-[12.5%] right-[12.5%] top-[13px] h-px bg-[#CBD5E1]" />
                  <div className="relative grid grid-cols-4 gap-1">
                    {operatingModel.steps.map((step, index) => {
                      const isActive = step.id === activeStep.id
                      const isComplete = index < activeIndex
                      return (
                        <button
                          key={step.id}
                          type="button"
                          onClick={() => setActiveStepId(step.id)}
                          className="group flex flex-col items-center text-center"
                        >
                          <span
                            className={`relative z-10 flex h-[27px] w-[27px] items-center justify-center rounded-full border font-mono text-[8px] transition-colors ${
                              isActive
                                ? 'border-[#0052CC] bg-[#0052CC] text-white'
                                : isComplete
                                  ? 'border-[#0A1628] bg-[#0A1628] text-white'
                                  : 'border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#0052CC]'
                            }`}
                          >
                            {isComplete ? <Check size={11} /> : step.number}
                          </span>
                          <span
                            className={`mt-2 text-[9.5px] font-medium leading-tight sm:text-[10.5px] ${
                              isActive ? 'text-[#0A1628]' : 'text-[#94A3B8]'
                            }`}
                          >
                            {step.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div key={activeStep.id} className="animate-fadeup flex flex-1 flex-col pt-6">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  Step {activeStep.number} / {activeStep.label}
                </p>
                <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#0A1628] sm:text-[1.75rem]">
                  {activeStep.statement}
                </h3>
                <p className="mt-3 max-w-xl text-[12px] leading-relaxed text-[#475569]">{activeStep.description}</p>

                <div className="mt-6 grid gap-px border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-3">
                  {activeStep.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-3.5">
                      <p className="font-mono text-lg font-medium leading-none tracking-[-0.03em] tabular-nums text-[#0A1628]">
                        {metric.value}
                      </p>
                      <p className="mt-1.5 font-mono text-[7.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[#D8DFE8]">
                  {activeStep.actions.map((action) => (
                    <div key={action} className="flex items-start gap-2.5 border-b border-[#E2E8F0] py-2.5 last:border-b-0">
                      <Check size={12} className="mt-0.5 shrink-0 text-[#059669]" />
                      <span className="text-[11.5px] leading-snug text-[#334155]">{action}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <a
                    href="#investors"
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
                  >
                    See how capital compounds
                    <ArrowRight size={12} />
                  </a>
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#94A3B8]">
                    Brevik operating system
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0] lg:grid-cols-4" data-reveal>
          {operatingModel.stats.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-4">
              <p className="font-mono text-xl font-medium leading-none tracking-[-0.03em] tabular-nums text-[#0A1628] sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#94A3B8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
