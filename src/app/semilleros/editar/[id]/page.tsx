'use client'

import { BackButton } from '@/components/backButton'
import { Header } from '@/components/header'
import { Section } from '@/components/section'
import { useParams } from 'next/navigation'

export default function SemilleroEditPage() {
  const params = useParams()
  const id = params?.id

  return (
    <>
      <Header>Gestionar semillero</Header>

      <Section>
        <BackButton />
      </Section>
      <Section>
        <h1>Edit Semillero</h1>
        <p>ID: {id}</p>
      </Section>
    </>
  )
}
