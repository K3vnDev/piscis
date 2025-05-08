import type { WidthHeight } from '@/types.d'
import Image from 'next/image'

export const LogoText = ({ w = 100, h = 100 }: WidthHeight) => (
  <Image
    alt='Texto del logo de la Universidad Simón Bolívar'
    src='/logo-text.webp'
    width={w}
    height={h}
    draggable={false}
  />
)
