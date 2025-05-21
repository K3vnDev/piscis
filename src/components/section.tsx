interface Props {
  children?: React.ReactNode
  className?: string
}

export const Section = ({ children, className = '' }: Props) => (
  <section className={`w-full bg-white px-8 py-5 rounded-md shadow-card ${className}`}>{children}</section>
)
