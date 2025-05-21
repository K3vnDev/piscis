import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  icon: React.ReactNode
  label: string
  path: string
  isExpanded: boolean
}

export const RouteButton = ({ icon, label, path, isExpanded }: Props) => {
  const pathname = usePathname()
  const color = pathname === path ? 'text-white' : 'text-zinc-500'

  return (
    <li title={label} className={`${color} button`}>
      <Link href={path}>
        <span className='*:size-9'>{icon}</span>
      </Link>
    </li>
  )
}
