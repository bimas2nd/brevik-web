import { useEffect, useState } from 'react'
import { ArrowRight, Check, Download, FileText, Printer } from 'lucide-react'
import Modal from './Modal'
import BrevikMark from './BrevikMark'
import { annualReport } from '../../data/brevikData'
import { useUI } from '../../context/UIContext'
import { downloadPdf } from '../../lib/pdf'

export default function ReportPreviewModal() {
  const { reportOpen, closeReport, openContact } = useUI()
  const [activeChapter, setActiveChapter] = useState(annualReport.chapters[0].id)
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    if (!reportOpen) {
      setActiveChapter(annualReport.chapters[0].id)
      setDownloaded(false)
    }
  }, [reportOpen])

  const chapter = annualReport.chapters.find((item) => item.id === activeChapter) || annualReport.chapters[0]

  const handleDownload = () => {
    downloadPdf({
      filename: annualReport.filename,
      title: annualReport.title,
      subtitle: annualReport.subtitle,
      meta: annualReport.meta,
      summary: annualReport.highlights,
      metrics: annualReport.stats,
      sections: annualReport.chapters.map((item) => ({
        heading: item.title,
        paragraphs: item.points,
      })),
    })
    setDownloaded(true)
  }

  const handlePrintedCopy = () => {
    closeReport()
    window.setTimeout(() => openContact('Investor Relations'), 160)
  }

  return (
    <Modal open={reportOpen} onClose={closeReport} label="2026 Integrated Annual Report preview" size="full">
      <div className="grid lg:grid-cols-12">
        <div className="relative overflow-hidden bg-[#0A1628] p-8 text-white sm:p-10 lg:col-span-4 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center gap-3">
              <BrevikMark size={34} />
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-white">BREVIK</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">Corporation</p>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7DA8F0]">
                {annualReport.kicker} / 2026
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl">
                {annualReport.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{annualReport.subtitle}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px border border-white/15 bg-white/15">
              {annualReport.stats.map((stat) => (
                <div key={stat.label} className="bg-[#0A1628] p-4">
                  <p className="font-mono text-lg font-medium tabular-nums text-white">{stat.value}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                {annualReport.published} · {annualReport.pages}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="border-b border-[#E2E8F0] px-6 pb-0 pt-8 sm:px-10">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0052CC]">
              <FileText size={13} />
              Interactive Report Preview
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0A1628]">
              A complete view of the 2026 financial year.
            </h3>
            <div className="no-scrollbar mt-6 flex gap-1 overflow-x-auto">
              {annualReport.chapters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveChapter(item.id)}
                  className={`shrink-0 border-b-2 px-4 pb-3 pt-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                    activeChapter === item.id
                      ? 'border-[#0052CC] text-[#0A1628]'
                      : 'border-transparent text-[#94A3B8] hover:text-[#475569]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <div key={chapter.id} className="animate-fadeup">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#475569]">
                {chapter.label}
              </p>
              <h4 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#0A1628]">{chapter.title}</h4>
              <ul className="mt-5 space-y-4">
                {chapter.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#334155]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0052CC]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-[#E2E8F0] pt-6">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#475569]">
                FY2026 highlights
              </p>
              <div className="mt-4 space-y-2.5">
                {annualReport.highlights.slice(0, 3).map((highlight) => (
                  <p key={highlight} className="flex gap-2 text-[12px] leading-relaxed text-[#475569]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#059669]" />
                    {highlight}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex h-11 items-center justify-center gap-2 bg-[#0052CC] px-5 text-sm font-medium text-white transition-colors hover:bg-[#003F9C]"
              >
                {downloaded ? <Check size={16} /> : <Download size={16} />}
                {downloaded ? 'Download ready' : 'Download full report'}
              </button>
              <button
                type="button"
                onClick={handlePrintedCopy}
                className="inline-flex h-11 items-center justify-center gap-2 border border-[#E2E8F0] px-5 text-sm font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
              >
                <Printer size={16} />
                Request printed copy
              </button>
              <button
                type="button"
                onClick={closeReport}
                className="inline-flex h-11 items-center justify-center gap-1.5 px-2 text-sm font-medium text-[#475569] transition-colors hover:text-[#0A1628]"
              >
                Return to site
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
