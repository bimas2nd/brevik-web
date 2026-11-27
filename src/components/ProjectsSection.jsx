import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, CalendarDays, Check, MapPin } from 'lucide-react'
import Container from './ui/Container'
import ImageFrame from './ui/ImageFrame'
import Modal from './ui/Modal'
import SectionEyebrow from './ui/SectionEyebrow'
import { projects, projectsOverview } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useUI } from '../context/UIContext'

const filters = ['All Projects', 'Grid & Power', 'Semiconductor', 'Maritime & Port', 'Robotics']

function statusColor(status) {
  return status === 'Operational' ? 'bg-[#059669]' : 'bg-[#D97706]'
}

export default function ProjectsSection() {
  const sectionRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [activeProject, setActiveProject] = useState(null)
  const { openContact } = useUI()
  useSectionReveal(sectionRef)

  const filtered =
    activeFilter === 'All Projects' ? projects : projects.filter((project) => project.filter === activeFilter)

  const handleInquiry = () => {
    setActiveProject(null)
    window.setTimeout(() => openContact('Enterprise Partnership'), 140)
  }

  return (
    <section id="projects" ref={sectionRef} aria-labelledby="projects-heading" className="bg-white pb-16 pt-4 sm:pb-20 lg:pb-24">
      <Container>
        <div className="grid gap-6 border-t border-[#E2E8F0] pt-12 lg:grid-cols-12 lg:items-end lg:pt-16" data-reveal>
          <div className="lg:col-span-7">
            <SectionEyebrow>{projectsOverview.eyebrow}</SectionEyebrow>
            <h2
              id="projects-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              {projectsOverview.heading}
            </h2>
            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-[#475569]">{projectsOverview.intro}</p>
          </div>
          <div className="grid grid-cols-3 gap-px border border-[#E2E8F0] bg-[#E2E8F0] lg:col-span-5">
            {projectsOverview.stats.map((stat) => (
              <div key={stat.label} className="bg-[#F4F6F9] p-4">
                <p className="font-mono text-lg font-medium leading-none tracking-[-0.03em] tabular-nums text-[#0A1628]">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-mono text-[7.5px] uppercase leading-snug tracking-[0.08em] text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" data-reveal>
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`border px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors ${
                  isActive
                    ? 'border-[#0A1628] bg-[#0A1628] text-white'
                    : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#0A1628] hover:text-[#0A1628]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3" data-reveal>
          {filtered.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              className="group flex flex-col border border-[#E2E8F0] bg-white text-left transition-all hover:border-[#0A1628] hover:shadow-[0_20px_45px_-32px_rgba(10,22,40,0.5)]"
            >
              <div className="relative overflow-hidden">
                <ImageFrame
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-[16/10]"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 bg-white/95 px-2.5 py-1 font-mono text-[8px] font-medium uppercase tracking-[0.1em] text-[#0A1628] backdrop-blur-sm">
                  <span className={`h-1.5 w-1.5 rounded-full ${statusColor(project.status)}`} />
                  {project.status}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.1em]">
                  <span className="text-[#0052CC]">{project.platform}</span>
                  <span className="text-[#94A3B8]">{project.year}</span>
                </div>
                <h3 className="mt-3 text-[15px] font-semibold leading-snug text-[#0A1628] transition-colors group-hover:text-[#0052CC]">
                  {project.name}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#475569]">{project.summary}</p>

                <div className="mt-4 grid grid-cols-3 gap-px border border-[#E2E8F0] bg-[#E2E8F0]">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label} className="bg-[#F8FAFC] px-2 py-2.5">
                      <p className="truncate font-mono text-[11px] font-medium tabular-nums text-[#0A1628]">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 truncate font-mono text-[7px] uppercase tracking-[0.06em] text-[#94A3B8]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="mt-auto flex items-center justify-between gap-2 pt-4">
                  <span className="flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#64748B]">
                    <MapPin size={10} />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-[#0A1628]">
                    Case study
                    <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4" data-reveal>
          <p className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
            Selected references · Full portfolio available in the 2026 Integrated Annual Report
          </p>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
          >
            View reporting
            <ArrowRight size={12} />
          </a>
        </div>
      </Container>

      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        label={activeProject ? `${activeProject.name} case study` : 'Project case study'}
        size="xl"
        className="overflow-hidden"
      >
        {activeProject ? (
          <div>
            <div className="relative">
              <ImageFrame src={activeProject.image} alt={activeProject.imageAlt} className="aspect-[21/9]" eager />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 bg-white/95 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-[#0A1628] backdrop-blur-sm">
                <span className={`h-1.5 w-1.5 rounded-full ${statusColor(activeProject.status)}`} />
                {activeProject.status}
              </div>
            </div>

            <div className="px-6 py-7 sm:px-10 sm:py-9">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[#64748B]">
                <span className="text-[#0052CC]">{activeProject.platform}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {activeProject.location}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays size={10} />
                  {activeProject.year}
                </span>
                <span>{activeProject.investment}</span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#0A1628] sm:text-[2rem]">
                {activeProject.name}
              </h2>
              <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-[#475569]">{activeProject.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4">
                {activeProject.metrics.map((metric) => (
                  <div key={metric.label} className="bg-[#F8FAFC] p-4">
                    <p className="font-mono text-lg font-medium leading-none tracking-[-0.03em] tabular-nums text-[#0A1628]">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 font-mono text-[7.5px] uppercase tracking-[0.08em] text-[#94A3B8]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-7 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#64748B]">Challenge</p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#334155]">{activeProject.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#64748B]">Solution</p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#334155]">{activeProject.solution}</p>
                </div>
              </div>

              <div className="mt-7 border-t border-[#E2E8F0] pt-5">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">Outcomes</p>
                <div className="mt-2">
                  {activeProject.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2.5 border-b border-[#F1F5F9] py-2.5 last:border-b-0">
                      <Check size={12} className="mt-0.5 shrink-0 text-[#059669]" />
                      <span className="text-[12px] leading-relaxed text-[#334155]">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-[#E2E8F0] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.08em] text-[#94A3B8]">
                  {activeProject.scope} · Reference portfolio 2026
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="inline-flex h-11 items-center justify-center border border-[#E2E8F0] px-5 text-[12px] font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
                  >
                    Close case study
                  </button>
                  <button
                    type="button"
                    onClick={handleInquiry}
                    className="inline-flex h-11 items-center justify-center gap-2 bg-[#0A1628] px-5 text-[12px] font-medium text-white transition-colors hover:bg-[#0052CC]"
                  >
                    Discuss a similar mandate
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
