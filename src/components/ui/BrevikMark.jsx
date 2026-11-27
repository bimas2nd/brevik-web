export default function BrevikMark({ size = 34, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Brevik Corporation monogram"
    >
      <rect width="64" height="64" rx="5" fill="#0A1628" />
      <rect x="14" y="13" width="8" height="38" fill="#FFFFFF" />
      <path d="M22 13h10.5a9.5 9.5 0 0 1 0 19H22V13Z" fill="#FFFFFF" />
      <path d="M22 31h11.5a10 10 0 0 1 0 20H22V31Z" fill="#0052CC" />
    </svg>
  )
}
