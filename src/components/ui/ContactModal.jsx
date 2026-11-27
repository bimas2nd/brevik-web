import { useEffect, useState } from 'react'
import { ArrowRight, Check, Mail, MapPin, Phone, Send } from 'lucide-react'
import Modal from './Modal'
import BrevikMark from './BrevikMark'
import { contactInquiryTypes, corporateContacts } from '../../data/brevikData'
import { useUI } from '../../context/UIContext'

const initialForm = {
  fullName: '',
  organization: '',
  email: '',
  inquiryType: contactInquiryTypes[0],
  region: 'Europe & UK',
  message: '',
  consent: false,
}

export default function ContactModal() {
  const { contactOpen, contactDefaultType, closeContact } = useUI()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [reference, setReference] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (contactOpen) {
      setSubmitted(false)
      setError('')
      setForm((previous) => ({ ...previous, inquiryType: contactDefaultType }))
    }
  }, [contactOpen, contactDefaultType])

  const update = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }))
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.fullName.trim() || !form.organization.trim() || !form.message.trim()) {
      setError('Please complete your name, organization, and inquiry message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid business email address.')
      return
    }
    if (!form.consent) {
      setError('Please confirm that you consent to Brevik processing your inquiry.')
      return
    }
    const suffix = String(Math.floor(100000 + Math.random() * 900000))
    setReference(`BVK-${new Date().getFullYear()}-${suffix}`)
    setSubmitted(true)
  }

  const startAnother = () => {
    setForm({ ...initialForm, inquiryType: contactDefaultType })
    setSubmitted(false)
    setError('')
  }

  const inputClass =
    'h-11 w-full border border-[#E2E8F0] bg-white px-3.5 text-sm text-[#0A1628] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#0052CC]'
  const labelClass = 'mb-2 block font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#475569]'

  return (
    <Modal open={contactOpen} onClose={closeContact} label="Corporate inquiry" size="full" className="overflow-hidden">
      <div className="grid lg:grid-cols-12">
        <div className="relative overflow-hidden bg-[#0A1628] p-8 text-white sm:p-10 lg:col-span-4">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <BrevikMark size={34} />
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-white">BREVIK</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">Corporation</p>
              </div>
            </div>

            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7DA8F0]">
              Corporate Affairs
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-white">
              Institutional & media inquiries.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Our corporate affairs team coordinates partnership, investor, media, and procurement requests across
              Zurich and Singapore.
            </p>

            <div className="mt-10 space-y-6 border-t border-white/15 pt-8">
              <div className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#7DA8F0]" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                    {corporateContacts.zurich.label}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/75">{corporateContacts.zurich.address}</p>
                  <a
                    href={`tel:${corporateContacts.zurich.phone.replace(/\s/g, '')}`}
                    className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-white/60 transition-colors hover:text-white"
                  >
                    <Phone size={11} />
                    {corporateContacts.zurich.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#7DA8F0]" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                    {corporateContacts.singapore.label}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/75">{corporateContacts.singapore.address}</p>
                  <a
                    href={`tel:${corporateContacts.singapore.phone.replace(/\s/g, '')}`}
                    className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-white/60 transition-colors hover:text-white"
                  >
                    <Phone size={11} />
                    {corporateContacts.singapore.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#7DA8F0]" />
                <div className="space-y-1">
                  <a
                    href={`mailto:${corporateContacts.investorEmail}`}
                    className="block font-mono text-[11px] text-white/60 transition-colors hover:text-white"
                  >
                    {corporateContacts.investorEmail}
                  </a>
                  <a
                    href={`mailto:${corporateContacts.mediaEmail}`}
                    className="block font-mono text-[11px] text-white/60 transition-colors hover:text-white"
                  >
                    {corporateContacts.mediaEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          {submitted ? (
            <div className="flex min-h-[520px] flex-col justify-center px-6 py-14 sm:px-12">
              <div className="flex h-12 w-12 items-center justify-center border border-[#059669] bg-[#ECFDF5] text-[#059669]">
                <Check size={22} />
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#059669]">Inquiry received</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0A1628]">
                Thank you, {form.fullName.split(' ')[0] || 'colleague'}.
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#475569]">
                Your request has been routed to the {form.inquiryType.toLowerCase()} desk. A member of our corporate
                affairs team will respond within two business days.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border border-[#E2E8F0] bg-[#F4F6F9] px-5 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#64748B]">Reference</span>
                <span className="font-mono text-sm font-medium tabular-nums text-[#0A1628]">{reference}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#64748B]">
                  {form.inquiryType}
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={startAnother}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-[#0A1628] px-5 text-sm font-medium text-white transition-colors hover:bg-[#0052CC]"
                >
                  Start another inquiry
                  <ArrowRight size={15} />
                </button>
                <button
                  type="button"
                  onClick={closeContact}
                  className="inline-flex h-11 items-center justify-center border border-[#E2E8F0] px-5 text-sm font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10 sm:py-10" noValidate>
              <div className="pr-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0052CC]">Inquiry form</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0A1628]">How can we help?</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#475569]">
                  Please provide business context so we can route your request to the right team.
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.fullName}
                    onChange={(event) => update('fullName', event.target.value)}
                    placeholder="Alexandra Weber"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-org" className={labelClass}>
                    Organization
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={form.organization}
                    onChange={(event) => update('organization', event.target.value)}
                    placeholder="Institution or company"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Business email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(event) => update('email', event.target.value)}
                    placeholder="name@organization.com"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-type" className={labelClass}>
                    Inquiry type
                  </label>
                  <select
                    id="contact-type"
                    value={form.inquiryType}
                    onChange={(event) => update('inquiryType', event.target.value)}
                    className={inputClass}
                  >
                    {contactInquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-region" className={labelClass}>
                    Primary region
                  </label>
                  <select
                    id="contact-region"
                    value={form.region}
                    onChange={(event) => update('region', event.target.value)}
                    className={inputClass}
                  >
                    <option>Europe & UK</option>
                    <option>Asia-Pacific</option>
                    <option>North America</option>
                    <option>Middle East & Africa</option>
                    <option>Latin America</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className={labelClass}>
                    Inquiry details
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(event) => update('message', event.target.value)}
                    rows={4}
                    placeholder="Please describe the opportunity or request, including any relevant timelines."
                    className="w-full resize-none border border-[#E2E8F0] bg-white px-3.5 py-3 text-sm leading-relaxed text-[#0A1628] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#0052CC]"
                    required
                  />
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-[11px] leading-relaxed text-[#475569]">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) => update('consent', event.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#0052CC]"
                  required
                />
                <span>
                  I consent to Brevik Corporation processing the information provided for the purpose of responding to
                  this inquiry, in accordance with the Privacy Notice.
                </span>
              </label>

              {error ? (
                <p role="alert" className="mt-4 border-l-2 border-[#DC2626] bg-[#FEF2F2] px-3 py-2 text-[12px] text-[#B91C1C]">
                  {error}
                </p>
              ) : null}

              <div className="mt-7 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-[#94A3B8]">
                  Responses within two business days. No unsolicited marketing.
                </p>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 bg-[#0A1628] px-6 text-sm font-medium text-white transition-colors hover:bg-[#0052CC]"
                >
                  Submit inquiry
                  <Send size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Modal>
  )
}
