import { LogoIcon } from '../images/logoIcon'
import { SignOutButton } from './signOutButton'

export const AppSidebar = () => (
  <aside className='bg-zinc-900 fixed h-screen w-24 flex flex-col py-8 items-center space justify-between'>
    <LogoIcon className='brightness-0 invert w-16' />
    <SignOutButton />
  </aside>
)
