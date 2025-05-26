'use client'

import { BackButton } from '@/components/backButton'
import { Header } from '@/components/header'
import { CreateResearchGroup } from '@/components/researchGroup/createResearchGroup'
import { Section } from '@/components/section'

export default function SemillerosCrearPage() {
  return (
    <>
      <Header>Crear semillero</Header>

      <Section>
        <BackButton />
      </Section>
      <CreateResearchGroup />
    </>
  )
}
