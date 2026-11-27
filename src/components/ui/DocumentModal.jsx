import { useEffect, useState } from 'react'
import { Check, Download, FileText } from 'lucide-react'
import Modal from './Modal'
import { downloadPdf } from '../../lib/pdf'

export default function DocumentModal({ document, open, onClose }) {
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    if (!open) setDownloaded(false)
  }, [open])

  if (!document) return null

  const handleDownload = () => {
    downloadPdf({
      filename: document.filename,
      title: document.title,
      subtitle: document.subtitle,
      meta: `${document.date}  |  ${document.pages} pages  |  ${document.size}`,
      summary: document.summary,
      metrics: document.metrics,
      sections: document.sections,
    })
    setDownloaded(true)
  }

  return (
    <Modal open={open} onClose={onClose} label={document.title} size="lg">
      <div className="border-b border-[#E2E8F0] bg-[#F4F6F9] px-6 py-8 sm:px-10 sm:py-10">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0052CC]">
          <FileText size={13} strokeWidth={1.75} />
          Investor Document
        </div>
        <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0A1628] sm:text-3xl">
          {document.title}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#475569]">{document.subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#475569]">
          <span>{document.date}</span>
          <span>{document.pages} pages</span>
          <span>{document.size}</span>
          <span>{document.format}</span>
        </div>
      </div>

      <div className="px-6 py-8 sm:px-10">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#475569]">Executive Summary</p>
        <ul className="mt-4 space-y-3">
          {document.summary.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#334155]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0052CC]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {document.metrics?.length ? (
          <>
            <div className="mt-8 h-px w-full bg-[#E2E8F0]" />
            <p className="mt-6 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#475569]">Key Figures</p>
            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden border border-[#E2E8F0] bg-[#E2E8F0] sm:grid-cols-4">
              {document.metrics.map((metric) => (
                <div key={metric.label} className="bg-white p-4">
                  <p className="font-mono text-xl font-medium tabular-nums tracking-tight text-[#0A1628]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-[#475569]">{metric.label}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 border-t border-[#E2E8F0] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs text-[11px] leading-relaxed text-[#64748B]">
            This preview is generated for demonstration. Figures are presented in USD unless otherwise stated.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 items-center justify-center border border-[#E2E8F0] px-5 text-sm font-medium text-[#0A1628] transition-colors hover:border-[#0A1628]"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex h-11 items-center justify-center gap-2 bg-[#0A1628] px-5 text-sm font-medium text-white transition-colors hover:bg-[#0052CC]"
            >
              {downloaded ? <Check size={16} className="text-[#059669]" /> : <Download size={16} />}
              {downloaded ? 'Download ready' : 'Download PDF'}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
