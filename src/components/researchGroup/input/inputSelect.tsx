type Props = {
  label: string
  options: string[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const InputSelect = (props: Props) => {
  const { label, options, className, required: _, ...properties } = props

  return (
    <label className={`flex flex-col gap-1 w-full cursor-text ${className ?? ''}`}>
      <span className='font-lg'>{label}</span>
      <select
        className='bg-blue-10 rounded-md focus:outline-1 py-2 px-4 text-black/50'
        {...properties}
        required
      >
        <option selected hidden>
          Seleccione...
        </option>
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
