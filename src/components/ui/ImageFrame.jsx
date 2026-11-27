import { useState } from 'react'

export default function ImageFrame({
  src,
  alt,
  className = '',
  imgClassName = '',
  caption,
  badge,
  eager = false,
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-[#0A1628] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading={eager ? 'eager' : 'lazy'}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 bg-[#0A1628]">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">Brevik Systems</span>
            <span className="max-w-sm font-mono text-xs leading-relaxed text-white/70">{alt}</span>
          </div>
          <span className="absolute left-0 top-0 h-1 w-24 bg-[#0052CC]" />
        </div>
      )}

      {badge ? (
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-white/95 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#0A1628] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
          {badge}
        </div>
      ) : null}

      {caption ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/35 to-transparent px-5 pb-4 pt-16 sm:px-7 sm:pb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 sm:text-[11px]">{caption}</p>
        </div>
      ) : null}
    </div>
  )
}
