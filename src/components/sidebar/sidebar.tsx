import { LogoIcon } from '../images/logoIcon'
import { SignOutButton } from './signOutButton'

export const Sidebar = () => (
  <aside className='bg-[#181A17] fixed h-screen w-24 flex flex-col py-8 items-center space justify-between'>
    <LogoIcon className='brightness-0 invert w-16' />
    <SignOutButton />
  </aside>
)
