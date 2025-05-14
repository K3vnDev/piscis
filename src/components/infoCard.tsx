import { FONTS } from '@/consts'

interface Props {
  icon: React.ReactNode
  count: number
  label: string
  className?: string
}

export const InfoCard = ({ icon, count = 0, label, className = '' }: Props) => {
  return (
    <article
      className={`
        bg-[#20C05C] text-white rounded-3xl px-8 pt-15 pb-7 flex flex-col
        relative ${FONTS.INTER} ${className}
      `}
    >
      <span className=' *:size-12 absolute left-4 top-4'>{icon}</span>
      <span className='text-[3.5rem] font-bold'>{count}</span>
      <span className='text-2xl -mt-3'>{label}</span>
    </article>
  )
}
