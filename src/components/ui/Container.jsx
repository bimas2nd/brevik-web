export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-10 ${className}`}>{children}</div>
  )
}
