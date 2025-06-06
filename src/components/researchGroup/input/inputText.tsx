type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const InputText = (props: Props) => {
  const { label, className, required: _, ...properties } = props

  return (
    <label className={`flex flex-col gap-1 w-full cursor-text ${className ?? ''}`}>
      <span className='font-lg'>{label}</span>
      <input
        type='text'
        className='bg-blue-10 rounded-md focus:outline-1 py-2 px-4 placeholder:text-black/35'
        {...properties}
        required
      />
    </label>
  )
}
