interface Props {
  name: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  icon?: React.ReactNode
  className?: string
}

export const Field = ({ name, placeholder, type, icon, className }: Props) => (
  <label
    className={`
      flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 
      focus-within:outline-1 cursor-text ${className}
    `}
  >
    <span className='*:size-5 text-gray-900'>{icon}</span>
    <input {...{ name, type, placeholder }} className='w-full outline-none placeholder:text-sm' />
  </label>
)
