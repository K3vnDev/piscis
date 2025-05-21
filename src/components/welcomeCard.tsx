import { FONTS } from '@/consts'
import Image from 'next/image'

export const WelcomeCard = () => (
  <div
    className={`
      w-full bg-gradient-to-r from-aqua-10 to-aqua-20 px-28
      flex justify-between text-white tracking-wide shadow-card
    `}
  >
    <span className='flex flex-col gap-1 py-12'>
      <h2 className={`${FONTS.POPPINS} font-bold text-[2.5rem]`}>¡Bienvenido, tutor!</h2>
      <p className={`${FONTS.INTER} text-2xl`}>
        Organiza tus semilleros, gestiona estudiantes <br /> y revisa solicitudes fácilmente.
      </p>
    </span>
    <span className='w-72 h-full relative mr-24'>
      <Image
        src='/smiling-girl-with-notebook.webp'
        width={400}
        height={400}
        draggable={false}
        alt='A smiling girl with a notebook in her arms'
        className='absolute h-[140%] object-cover bottom-0'
      />
    </span>
  </div>
)
