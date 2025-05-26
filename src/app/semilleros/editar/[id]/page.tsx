'use client'

import { BackButton } from '@/components/backButton'
import { Header } from '@/components/header'
import { EditResearchGroup } from '@/components/researchGroup/editResearchGroup'
import { Section } from '@/components/section'
import { useParams } from 'next/navigation'

export default function SemilleroEditPage() {
  const params = useParams()
  const id = params?.id?.toString()

  return (
    <>
      {id && (
        <>
          <Header>Gestionar semillero</Header>

          <Section>
            <BackButton />
          </Section>
          <EditResearchGroup id={id} />
        </>
      )}
    </>
  )
}
