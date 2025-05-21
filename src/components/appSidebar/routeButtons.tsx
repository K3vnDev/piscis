import Link from 'next/link'

interface Props {
  icon: React.ReactNode
  label: string
  path: string
  isExpanded: boolean
}

export const RouteButton = ({ icon, label, path, isExpanded }: Props) => {
  return (
    <li title={label} className='text-white button'>
      <Link href={path}>
        <span className='*:size-9'>{icon}</span>
      </Link>
    </li>
  )
}
