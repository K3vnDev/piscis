import type { Logo } from '@/types.d'
import Image from 'next/image'

export const LogoText = ({ w = 100, h = 100, className }: Logo) => (
  <Image
    alt='Texto del logo de la Universidad Simón Bolívar'
    src='/logo-text.webp'
    width={w}
    height={h}
    draggable={false}
    className={className}
  />
)
