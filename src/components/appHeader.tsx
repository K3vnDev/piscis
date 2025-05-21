import { BellIcon, ChatBubbleIcon } from './icons'

export const AppHeader = () => {
  return (
    <header className='w-full h-20 bg-white mb-20 flex justify-end px-14 items-center gap-6 *:size-8 *:text-zinc-400 *:stroke-[1.5px]'>
      <BellIcon />
      <ChatBubbleIcon />
    </header>
  )
}
