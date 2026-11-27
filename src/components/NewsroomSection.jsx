import { useMemo, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Clock3, Copy, Mail } from 'lucide-react'
import Container from './ui/Container'
import Drawer from './ui/Drawer'
import SectionEyebrow from './ui/SectionEyebrow'
import { corporateContacts, newsroom } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useUI } from '../context/UIContext'

const categories = ['All News', 'Financial', 'Operations', 'Sustainability', 'Partnerships']

const categoryStyles = {
  Financial: 'border-[#BFD5F7] bg-[#EFF5FF] text-[#0052CC]',
  Operations: 'border-[#CBD5E1] bg-[#F4F6F9] text-[#0A1628]',
  Sustainability: 'border-[#A7F3D0] bg-[#ECFDF5] text-[#047857]',
  Partnerships: 'border-[#99F6E4] bg-[#F0FDFA] text-[#0F766E]',
}

function PressReleaseDrawer({ article, open, onClose }) {
  const [copied, setCopied] = useState(false)
  const copiedTimer = useRef(null)

  const resetCopy = () => {
    if (copiedTimer.current) window.clearTimeout(copiedTimer.current)
    copiedTimer.current = window.setTimeout(() => setCopied(false), 2200)
  }

  const handleCopy = async () => {
    const link = `https://brevik.com/newsroom/${article.id}`
    try {
      await navigator.clipboard.writeText(link)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = link
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    resetCopy()
  }

  if (!article) return null

  const renderBlock = (block, index) =>
    block.type === 'h' ? (
      <h3 key={`${block.type}-${index}`} className="mt-8 text-lg font-semibold tracking-[-0.02em] text-[#0A1628]">
        {block.text}
      </h3>
    ) : (
      <p key={`${block.type}-${index}`} className="mt-4 text-[13.5px] leading-[1.8] text-[#334155]">
        {block.text}
      </p>
    )

  return (
    <Drawer open={open} onClose={onClose} label={article.title} width="max-w-3xl">
      <article className="px-5 py-7 sm:px-9 sm:py-9">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex border px-2 py-1 font-mono text-[8.5px] font-medium uppercase tracking-[0.1em] ${
              categoryStyles[article.category] || categoryStyles.Operations
            }`}
          >
            {article.category}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#64748B]">{article.date}</span>
          <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#94A3B8]">
            <Clock3 size={11} />
            {article.readingTime}
          </span>
        </div>

        <h1 className="mt-5 text-2xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#0A1628] sm:text-[2.1rem]">
          {article.title}
        </h1>
        <p className="mt-4 border-l-2 border-[#0052CC] pl-4 text-[13.5px] leading-relaxed text-[#475569]">
          {article.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-[#E2E8F0] py-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#94A3B8]">{article.location}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 border border-[#E2E8F0] px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#475569] transition-colors hover:border-[#0A1628] hover:text-[#0A1628]"
          >
            {copied ? <Check size={11} className="text-[#059669]" /> : <Copy size={11} />}
            {copied ? 'Link copied' : 'Copy press link'}
          </button>
        </div>

        <div className="mt-6">
          {article.body.slice(0, 2).map(renderBlock)}

          {article.quote ? (
            <blockquote className="my-8 border-y border-[#E2E8F0] bg-[#F4F6F9] px-5 py-6 sm:px-7">
              <p className="text-[15px] font-medium leading-relaxed text-[#0A1628]">“{article.quote.text}”</p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center bg-[#0A1628] font-mono text-[9px] text-white">
                  {article.quote.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <span>
                  <span className="block text-[11px] font-semibold text-[#0A1628]">{article.quote.name}</span>
                  <span className="block font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#64748B]">
                    {article.quote.title}
                  </span>
                </span>
              </footer>
            </blockquote>
          ) : null}

          {article.body.slice(2).map((block, index) => renderBlock(block, index + 2))}
        </div>

        <div className="mt-9 grid gap-4 border-t border-[#E2E8F0] pt-6 sm:grid-cols-2">
          <div className="border border-[#E2E8F0] bg-[#F4F6F9] p-4">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#64748B]">Media contact</p>
            <p className="mt-2 text-[12px] font-medium text-[#0A1628]">Global Media Relations</p>
            <a
              href={`mailto:${corporateContacts.mediaEmail}`}
              className="mt-1 inline-flex items-center gap-1.5 font-mono text-[10px] text-[#0052CC] hover:underline"
            >
              <Mail size={11} />
              {corporateContacts.mediaEmail}
            </a>
            <p className="mt-1 font-mono text-[9px] text-[#64748B]">{corporateContacts.zurich.phone}</p>
          </div>
          <div className="border border-[#E2E8F0] p-4">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#64748B]">About Brevik</p>
            <p className="mt-2 text-[10.5px] leading-relaxed text-[#475569]">
              Brevik Corporation (NYSE: BVK) is a global industrial infrastructure company operating high-voltage grids,
              semiconductor precision supply, maritime automation, and industrial robotics across 38 countries.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-7 inline-flex items-center gap-2 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
        >
          Return to newsroom
          <ArrowRight size={13} />
        </button>
      </article>
    </Drawer>
  )
}

export default function NewsroomSection() {
  const sectionRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All News')
  const [activeArticle, setActiveArticle] = useState(null)
  const { openContact } = useUI()
  useSectionReveal(sectionRef)

  const counts = useMemo(() => {
    const result = { 'All News': newsroom.length }
    categories.slice(1).forEach((category) => {
      result[category] = newsroom.filter((article) => article.category === category).length
    })
    return result
  }, [])

  const filtered = useMemo(
    () => (activeCategory === 'All News' ? newsroom : newsroom.filter((article) => article.category === activeCategory)),
    [activeCategory],
  )

  return (
    <section
      id="newsroom"
      ref={sectionRef}
      aria-labelledby="newsroom-heading"
      className="border-y border-[#E2E8F0] bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-8">
            <SectionEyebrow>09 / Newsroom</SectionEyebrow>
            <h2
              id="newsroom-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              Corporate announcements & operational milestones.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <button
              type="button"
              onClick={() => openContact('Media & Press')}
              className="group inline-flex h-11 items-center gap-2 border border-[#E2E8F0] px-4 text-[12px] font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
            >
              Media inquiries
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-b border-[#E2E8F0] pb-4 sm:flex-row sm:items-center sm:justify-between" data-reveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 border px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? 'border-[#0A1628] bg-[#0A1628] text-white'
                      : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#0A1628] hover:text-[#0A1628]'
                  }`}
                >
                  {category}
                  <span className={`ml-1.5 ${isActive ? 'text-white/50' : 'text-[#94A3B8]'}`}>{counts[category]}</span>
                </button>
              )
            })}
          </div>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
            {filtered.length} releases · Updated 25 Nov 2026
          </span>
        </div>

        <div className="mt-0" data-reveal>
          <div className="hidden grid-cols-[126px_120px_1fr_130px] gap-5 border-b border-[#E2E8F0] py-3 font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#94A3B8] sm:grid">
            <span>Date</span>
            <span>Category</span>
            <span>Headline</span>
            <span className="text-right">Reading</span>
          </div>

          {filtered.map((article) => (
            <button
              key={article.id}
              type="button"
              onClick={() => setActiveArticle(article)}
              className="group grid w-full grid-cols-1 gap-2.5 border-b border-[#E2E8F0] py-5 text-left transition-colors hover:bg-[#F8FAFC] sm:grid-cols-[126px_120px_1fr_130px] sm:items-center sm:gap-5"
            >
              <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.04em] tabular-nums text-[#64748B]">
                {article.date}
              </span>
              <span>
                <span
                  className={`inline-flex border px-2 py-1 font-mono text-[8px] font-medium uppercase tracking-[0.08em] ${
                    categoryStyles[article.category] || categoryStyles.Operations
                  }`}
                >
                  {article.category}
                </span>
              </span>
              <span className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-[#0A1628] transition-colors group-hover:text-[#0052CC] sm:text-[14px]">
                {article.title}
              </span>
              <span className="flex items-center justify-between gap-3 sm:justify-end">
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-[#94A3B8]">
                  <Clock3 size={11} />
                  {article.readingTime}
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-[#CBD5E1] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0052CC]"
                />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3" data-reveal>
          <p className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
            Press releases are archived for 7 years. Financial disclosures available in Investor Relations.
          </p>
          <a
            href="#investors"
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
          >
            View financial disclosures
            <ArrowRight size={12} />
          </a>
        </div>
      </Container>

      <PressReleaseDrawer
        article={activeArticle}
        open={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
      />
    </section>
  )
}
