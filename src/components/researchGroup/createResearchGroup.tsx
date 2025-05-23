import { InputText } from './input/inputText'
import { Section } from '../section'
import { useRouter } from 'next/navigation'

export const CreateResearchGroup = () => {
  const router = useRouter()

  const handleClick = () => {
    router.replace('/semilleros')
  }

  return (
    <Section className='pt-8 pb-12 px-14 flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <span>Información del semillero</span>
        <line className='w-full h-0.5 rounded-full bg-zinc-200' />
      </div>

      <div className='flex flex-col gap-4.5 items-center'>
        <div className='flex gap-16 w-full'>
          <InputText label='Nombre' placeholder='Nombre del semillero' />
          <InputText label='Programa Académico' placeholder='Seleccione' />
        </div>
        <InputText
          label='Breve descripción'
          placeholder='Ej. Semillero enfocado en el desarrollo de soluciones sostenibles en comunidades rurales'
        />
        <InputText label='Sectores en lo que aplican' placeholder='Sector Productivo' />
        <InputText label='Linea de investigacion' placeholder='Especifica tu investigacion' />
        <InputText label='Área de conocimiento' placeholder='Seleccione' />
        <InputText label='Fecha de creación' placeholder='DD/MM/AAAA' />
        <InputText label='Correo electrónico' placeholder='ejemplo@gmail.com' />
        <button
          className='px-12 py-3 rounded-md bg-blue-50 text-white w-fit mt-4 font-semibold button'
          onClick={handleClick}
        >
          GUARDAR
        </button>
      </div>
    </Section>
  )
}
