type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLTextAreaElement>

export const InputArea = (props: Props) => {
  const { label, className, required: _, ...properties } = props

  return (
    <label className={`flex flex-col gap-1 w-full cursor-text ${className ?? ''}`}>
      <span className='font-lg'>{label}</span>
      <textarea
        type='text'
        className={`
          bg-blue-10 rounded-md focus:outline-1 py-2 px-4 
          placeholder:text-black/35 h-16 min-h-10 max-h-32
        `}
        {...properties}
        required
      />
    </label>
  )
}
