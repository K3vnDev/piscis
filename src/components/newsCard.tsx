import { SpeakerIcon } from './icons'

export const NewsCard = () => {
  return (
    <article className='bg-gradient-to-r from-blue-30 to-blue-40 rounded-xl py-5 px-7 flex flex-col gap-2 mt-8'>
      <header className='flex justify-between items-center text-white px-2'>
        <span className='font-semibold text-2xl'>Novedades</span>
        <SpeakerIcon />
      </header>
      <New title='El semillero de robótica gano un premio en la feria científica.' time={2} />
      <New title='Se han agregado nuevas funciones en la plataforma.' time={5} />
    </article>
  )
}

interface NewProps {
  title: string
  time: number
}

const New = ({ title, time }: NewProps) => {
  return (
    <div className='flex flex-col gap-1 text-sm text-white p-4 pr-32 rounded shadow-md'>
      <span className='text-white'>{title}</span>
      <span className='opacity-75'>hace {time} días</span>
    </div>
  )
}
