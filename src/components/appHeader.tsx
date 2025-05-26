import { BellIcon, ChatBubbleIcon } from './icons'

export const AppHeader = () => (
  <header
    className={`
      w-screen pl-(--sidebar-w) h-(--header-h) bg-white mb-20 flex justify-end px-14 items-center gap-6 
      *:size-8 *:text-zinc-400 *:stroke-[1.5px] fixed top-0 right-0
    `}
  >
    <BellIcon />
    <ChatBubbleIcon />
  </header>
)
