import { useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import Container from './ui/Container'
import Modal from './ui/Modal'
import BrevikMark from './ui/BrevikMark'
import SectionEyebrow from './ui/SectionEyebrow'
import {
  boardStats,
  company,
  corporateContacts,
  footerSitemap,
  leadership,
  legalPolicies,
  stock,
} from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { useUI } from '../context/UIContext'
import { useMarket } from '../context/MarketContext'

function initials(name) {
  const parts = name.split(' ')
  return `${parts[0]?.[0] || ''}${parts[parts.length - 1]?.[0] || ''}`.toUpperCase()
}

function BioModal({ person, open, onClose }) {
  const { openContact } = useUI()
  if (!person) return null

  const handleInquiry = () => {
    onClose()
    window.setTimeout(() => openContact('Investor Relations'), 120)
  }

  return (
    <Modal open={open} onClose={onClose} label={`${person.name} biography`} size="lg">
      <div className="border-b border-[#E2E8F0] bg-[#F4F6F9] px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#CBD5E1] bg-white font-mono text-lg font-medium tracking-[0.04em] text-[#0A1628]">
            {initials(person.name)}
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#0052CC]">
              Board & Executive Committee
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0A1628] sm:text-3xl">
              {person.name}
            </h2>
            <p className="mt-1.5 text-[13px] font-medium text-[#334155]">{person.role}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.08em] text-[#64748B]">
              <span>{person.committee}</span>
              <span className="text-[#CBD5E1]">/</span>
              <span>{person.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 sm:px-10">
        <div className="space-y-4">
          {person.bio.map((paragraph) => (
            <p key={paragraph} className="text-[13.5px] leading-[1.85] text-[#334155]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid gap-px border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-2">
          <div className="bg-white p-5">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#94A3B8]">Education</p>
            <p className="mt-2 text-[12px] leading-relaxed text-[#0A1628]">{person.education}</p>
          </div>
          <div className="bg-white p-5">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#94A3B8]">External roles</p>
            <p className="mt-2 text-[12px] leading-relaxed text-[#0A1628]">{person.boardRoles}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={handleInquiry}
            className="inline-flex h-11 items-center justify-center gap-2 bg-[#0A1628] px-5 text-[12px] font-medium text-white transition-colors hover:bg-[#0052CC]"
          >
            Institutional inquiry
            <ArrowRight size={14} />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 items-center justify-center border border-[#E2E8F0] px-5 text-[12px] font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
          >
            Close biography
          </button>
        </div>
      </div>
    </Modal>
  )
}

function LegalModal({ policyKey, open, onClose }) {
  const policy = policyKey ? legalPolicies[policyKey] : null
  if (!policy) return null

  return (
    <Modal open={open} onClose={onClose} label={policy.title} size="md">
      <div className="border-b border-[#E2E8F0] px-6 py-8 sm:px-9">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#0052CC]">
          <ShieldCheck size={13} />
          Legal & Compliance
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0A1628]">{policy.title}</h2>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#94A3B8]">{policy.updated}</p>
      </div>
      <div className="px-6 py-7 sm:px-9">
        <p className="text-[13px] leading-relaxed text-[#475569]">{policy.intro}</p>
        <div className="mt-6">
          {policy.sections.map((section) => (
            <div key={section.heading} className="border-b border-[#E2E8F0] py-5 last:border-b-0">
              <h3 className="text-[12.5px] font-semibold text-[#0A1628]">{section.heading}</h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#475569]">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-[#E2E8F0] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8.5px] uppercase tracking-[0.08em] text-[#94A3B8]">
            Brevik Corporation · Zurich, Switzerland
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center justify-center border border-[#E2E8F0] px-4 text-[12px] font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default function LeadershipFooter() {
  const sectionRef = useRef(null)
  const [activePerson, setActivePerson] = useState(null)
  const [legalKey, setLegalKey] = useState(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribeError, setSubscribeError] = useState('')
  const { openContact } = useUI()
  const { quote } = useMarket()
  const isPositive = quote.changePercent >= 0
  useSectionReveal(sectionRef)

  const handleSubscribe = (event) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeError('Please enter a valid email address.')
      return
    }
    setSubscribeError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <>
      <section id="leadership" ref={sectionRef} aria-labelledby="leadership-heading" className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
            <div className="lg:col-span-7">
              <SectionEyebrow>10 / Leadership & Governance</SectionEyebrow>
              <h2
                id="leadership-heading"
                className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
              >
                Operators, engineers, and fiduciaries.
              </h2>
              <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-[#475569]">
                Brevik is led by an executive committee with deep operating experience and overseen by an independent
                board with direct accountability to shareholders.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px border border-[#E2E8F0] bg-[#E2E8F0] lg:col-span-5">
              {boardStats.map((stat) => (
                <div key={stat.label} className="bg-[#F4F6F9] p-4">
                  <p className="font-mono text-xl font-medium tabular-nums tracking-[-0.03em] text-[#0A1628]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[#64748B]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" data-reveal>
            {leadership.map((person, index) => (
              <button
                key={person.id}
                type="button"
                onClick={() => setActivePerson(person)}
                className="group flex h-full flex-col border border-[#E2E8F0] bg-white p-5 text-left transition-all hover:border-[#0A1628] hover:shadow-[0_18px_40px_-30px_rgba(10,22,40,0.5)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border border-[#E2E8F0] bg-[#F4F6F9] font-mono text-[13px] font-medium tracking-[0.04em] text-[#0A1628] transition-colors group-hover:border-[#0A1628] group-hover:bg-[#0A1628] group-hover:text-white">
                    {initials(person.name)}
                  </span>
                  <span className="font-mono text-[8px] tabular-nums text-[#94A3B8]">0{index + 1}</span>
                </div>
                <h3 className="mt-4 text-[14px] font-semibold leading-snug text-[#0A1628]">{person.name}</h3>
                <p className="mt-1 text-[11px] leading-snug text-[#475569]">{person.role}</p>
                <div className="mt-4 space-y-1.5 border-t border-[#E2E8F0] pt-3">
                  <p className="font-mono text-[8px] uppercase leading-snug tracking-[0.08em] text-[#64748B]">
                    {person.committee}
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-[#94A3B8]">
                    {person.location}
                  </p>
                </div>
                <span className="mt-auto flex items-center gap-1.5 pt-4 text-[10px] font-medium text-[#0A1628]">
                  Read biography
                  <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4" data-reveal>
            <p className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
              Board committees · Audit · Governance & Nominating · Compensation & Talent
            </p>
            <button
              type="button"
              onClick={() => openContact('Investor Relations')}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#0A1628] transition-colors hover:text-[#0052CC]"
            >
              Investor contact
              <ArrowUpRight size={12} />
            </button>
          </div>
        </Container>

        <div className="relative mt-14 overflow-hidden bg-[#0A1628]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <Container className="relative py-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7DA8F0]">
                  Institutional partnerships
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  Partner with Brevik Corporation.
                </h2>
                <p className="mt-3 max-w-lg text-[12.5px] leading-relaxed text-white/60">
                  For enterprise partnerships, investor relations, media requests, or procurement, our corporate affairs
                  team coordinates a structured response across Zurich and Singapore.
                </p>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => openContact('Enterprise Partnership')}
                    className="group inline-flex h-12 items-center justify-center gap-2 bg-white px-5 text-[12px] font-medium text-[#0A1628] transition-colors hover:bg-[#0052CC] hover:text-white"
                  >
                    Institutional & media inquiries
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => openContact('Investor Relations')}
                    className="inline-flex h-12 items-center justify-center border border-white/25 px-5 text-[12px] font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    Investor relations
                  </button>
                </div>
                <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                  Zurich · Singapore · 38 countries
                </p>
              </div>
            </div>
          </Container>
        </div>

        <footer className="border-t border-[#E2E8F0] bg-[#F4F6F9]">
          <Container className="py-12 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <a href="#top" className="flex items-center gap-3">
                  <BrevikMark size={36} />
                  <span className="flex flex-col">
                    <span className="text-[16px] font-bold leading-none tracking-[0.14em] text-[#0A1628]">BREVIK</span>
                    <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.28em] text-[#64748B]">
                      Corporation
                    </span>
                  </span>
                </a>
                <p className="mt-5 max-w-sm text-[12px] leading-relaxed text-[#475569]">{company.description}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex gap-2.5">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-[#0052CC]" />
                    <p className="text-[10.5px] leading-relaxed text-[#475569]">
                      <span className="block font-medium text-[#0A1628]">{corporateContacts.zurich.label}</span>
                      {corporateContacts.zurich.address}
                    </p>
                  </div>
                  <div className="flex gap-2.5">
                    <MapPin size={13} className="mt-0.5 shrink-0 text-[#0052CC]" />
                    <p className="text-[10.5px] leading-relaxed text-[#475569]">
                      <span className="block font-medium text-[#0A1628]">{corporateContacts.singapore.label}</span>
                      {corporateContacts.singapore.address}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
                    <a
                      href={`tel:${corporateContacts.zurich.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] text-[#64748B] transition-colors hover:text-[#0A1628]"
                    >
                      <Phone size={10} />
                      {corporateContacts.zurich.phone}
                    </a>
                    <a
                      href={`mailto:${corporateContacts.investorEmail}`}
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] text-[#64748B] transition-colors hover:text-[#0A1628]"
                    >
                      <Mail size={10} />
                      {corporateContacts.investorEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  Quarterly investor alerts
                </p>
                <p className="mt-3 text-[12px] leading-relaxed text-[#475569]">
                  Receive results, reporting dates, and corporate announcements directly from Brevik Investor Relations.
                </p>
                {subscribed ? (
                  <div className="mt-5 border border-[#A7F3D0] bg-[#ECFDF5] p-4" role="status">
                    <p className="flex items-center gap-2 text-[12px] font-medium text-[#047857]">
                      <Check size={14} />
                      Subscription confirmed
                    </p>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-[#475569]">
                      You will receive the next quarterly investor alert.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-5">
                    <label htmlFor="footer-email" className="sr-only">
                      Email address for quarterly investor alerts
                    </label>
                    <div className="flex border border-[#CBD5E1] bg-white focus-within:border-[#0052CC]">
                      <input
                        id="footer-email"
                        type="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value)
                          setSubscribeError('')
                        }}
                        placeholder="name@institution.com"
                        className="h-11 min-w-0 flex-1 bg-transparent px-3 text-[12px] text-[#0A1628] outline-none placeholder:text-[#94A3B8]"
                        required
                      />
                      <button
                        type="submit"
                        aria-label="Subscribe to investor alerts"
                        className="inline-flex w-11 items-center justify-center bg-[#0A1628] text-white transition-colors hover:bg-[#0052CC]"
                      >
                        <ArrowRight size={15} />
                      </button>
                    </div>
                    {subscribeError ? (
                      <p role="alert" className="mt-2 font-mono text-[9px] text-[#B91C1C]">
                        {subscribeError}
                      </p>
                    ) : null}
                    <p className="mt-2 text-[9.5px] leading-relaxed text-[#94A3B8]">
                      By subscribing you agree to the Privacy Notice. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>

              <div className="lg:col-span-3">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  Share information
                </p>
                <div className="mt-3 border border-[#E2E8F0] bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#64748B]">NYSE: BVK</span>
                    <span className="animate-ticker-blink h-1.5 w-1.5 rounded-full bg-[#059669]" />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-medium tabular-nums tracking-[-0.03em] text-[#0A1628]">
                    ${quote.price.toFixed(2)}
                  </p>
                  <p
                    className={`mt-1 font-mono text-[10px] tabular-nums ${
                      isPositive ? 'text-[#059669]' : 'text-[#DC2626]'
                    }`}
                  >
                    {isPositive ? '+' : ''}
                    {quote.change.toFixed(2)} ({isPositive ? '+' : ''}
                    {quote.changePercent.toFixed(2)}%)
                  </p>
                  <div className="mt-3 space-y-1.5 border-t border-[#E2E8F0] pt-3 font-mono text-[8.5px] text-[#64748B]">
                    <div className="flex justify-between gap-2">
                      <span>Market cap</span>
                      <span className="text-[#0A1628]">{stock.marketCap}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Day range</span>
                      <span className="tabular-nums text-[#0A1628]">{stock.dayRange}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span>Updated</span>
                      <span className="text-[#0A1628]">{stock.note}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#CBD5E1] pt-10 lg:grid-cols-5">
              {footerSitemap.map((column) => (
                <div key={column.title}>
                  <p className="font-mono text-[8.5px] font-medium uppercase tracking-[0.16em] text-[#64748B]">
                    {column.title}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        {link.policy ? (
                          <button
                            type="button"
                            onClick={() => setLegalKey(link.policy)}
                            className="text-left text-[11px] leading-snug text-[#475569] transition-colors hover:text-[#0052CC]"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="text-[11px] leading-snug text-[#475569] transition-colors hover:text-[#0052CC]"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-[#CBD5E1] pt-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <p className="text-[10.5px] text-[#475569]">
                    © 2026 Brevik Corporation. All rights reserved.
                  </p>
                  <button
                    type="button"
                    onClick={() => setLegalKey('privacy')}
                    className="text-[10px] text-[#64748B] transition-colors hover:text-[#0A1628]"
                  >
                    Privacy
                  </button>
                  <button
                    type="button"
                    onClick={() => setLegalKey('terms')}
                    className="text-[10px] text-[#64748B] transition-colors hover:text-[#0A1628]"
                  >
                    Terms
                  </button>
                  <button
                    type="button"
                    onClick={() => setLegalKey('cookies')}
                    className="text-[10px] text-[#64748B] transition-colors hover:text-[#0A1628]"
                  >
                    Cookies
                  </button>
                </div>
                <p className="mt-3 text-[9px] leading-relaxed text-[#94A3B8]">
                  Stock data is provided for informational purposes only, is delayed at least 15 minutes, and does not
                  constitute investment advice or an offer to buy or sell securities. Forward-looking statements are
                  subject to risks and uncertainties described in Brevik Corporation's filings with the U.S. Securities
                  and Exchange Commission. Past performance is not indicative of future results.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#94A3B8]">
                <span>Dual HQ</span>
                <span className="h-3 w-px bg-[#CBD5E1]" />
                <span>Zurich · Singapore</span>
                <span className="h-3 w-px bg-[#CBD5E1]" />
                <span className="text-[#059669]">NYSE: BVK</span>
              </div>
            </div>
          </Container>
        </footer>
      </section>

      <BioModal person={activePerson} open={Boolean(activePerson)} onClose={() => setActivePerson(null)} />
      <LegalModal policyKey={legalKey} open={Boolean(legalKey)} onClose={() => setLegalKey(null)} />
    </>
  )
}
