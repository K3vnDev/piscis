interface Props {
  children: React.ReactNode
  className?: string
}

export const Submit = ({ children, className }: Props) => (
  <button className={`button bg-[#1A6AFF] rounded-md text-white font-semibold py-3 ${className}`}>
    {children}
  </button>
)
