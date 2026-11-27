export default function SectionEyebrow({ children, tone = 'light', className = '', withRule = true }) {
  const isDark = tone === 'dark'
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] ${
        isDark ? 'text-slate-300' : 'text-[#475569]'
      } ${className}`}
    >
      {withRule ? <span data-rule className={`h-px w-7 ${isDark ? 'bg-white/50' : 'bg-[#0052CC]'}`} /> : null}
      <span>{children}</span>
    </div>
  )
}
