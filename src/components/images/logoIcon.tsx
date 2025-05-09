import type { Logo } from '@/types.d'
import Image from 'next/image'

export const LogoIcon = ({ w = 100, h = 100, className }: Logo) => (
  <Image
    alt='Icono del logo de la Universidad Simón Bolívar'
    src='/logo-icon.webp'
    width={w}
    height={h}
    draggable={false}
    className={className}
  />
)
