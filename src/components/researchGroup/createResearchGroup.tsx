import { InputText } from './input/inputText'
import { Section } from '../section'
import { useRouter } from 'next/navigation'
import { InputArea } from './input/inputArea'
import { InputSelect } from './input/inputSelect'
import { ACADEMIC_PROGRAMS, CONTENT_JSON, KNOWLEDGE_FIELDS } from '@/consts'
import { dataFetch } from '@/lib/utils/dataFetch'
import type { ResearchGroupType } from '@/lib/schemas/researchGroup'
import { useState } from 'react'
import { InfoIcon, LoadingIcon } from '../icons'

export const CreateResearchGroup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const data = {
      name: formData.get('name'),
      desc: formData.get('desc'),
      program: formData.get('prog'),
      sector: formData.get('sect'),
      line: formData.get('line'),
      field: formData.get('field')
    }

    setIsLoading(true)

    dataFetch<ResearchGroupType>({
      url: '/api/research-group',
      options: {
        method: 'POST',
        headers: CONTENT_JSON,
        body: JSON.stringify(data)
      },
      onSuccess: () => {
        router.push('/semilleros')
      },
      onFinish: () => setIsLoading(false)
    })
  }

  return (
    <Section className='py-8 px-14 flex flex-col gap-6 relative'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <InfoIcon />
          <span>Información del semillero</span>
        </div>
        <line className='w-full h-0.5 rounded-full bg-zinc-200' />
      </div>

      <form className='flex flex-col gap-4.5 items-center' onSubmit={handleSubmit}>
        <div className='flex gap-12 w-full'>
          <InputText name='name' label='Nombre' placeholder='Nombre del semillero' />
          <InputSelect name='prog' label='Programa Académico' options={[...ACADEMIC_PROGRAMS]} />
        </div>
        <InputArea
          label='Breve descripción'
          name='desc'
          placeholder='Ej. Semillero enfocado en el desarrollo de soluciones sostenibles en comunidades rurales'
          className='mb-5'
        />
        <InputText name='sect' label='Sectores en lo que aplican' placeholder='Ej. Sector Productivo' />
        <InputText name='line' label='Linea de investigación' placeholder='Especifica tu investigación...' />
        <InputSelect name='field' label='Área de conocimiento' options={[...KNOWLEDGE_FIELDS]} />
        <button
          className={`
            px-16 py-3 rounded-md bg-blue-40 text-white w-fit mt-5 font-semibold button
            flex items-center justify-center gap-2
          `}
          disabled={isLoading}
        >
          {isLoading && <LoadingIcon className='animate-spin' />}
          Crear semillero
        </button>
      </form>
    </Section>
  )
}
