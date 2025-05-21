interface Props {
  children: string
}

export const Header = ({ children }: Props) => {
  return <span className='text-[#4D4B4B] text-xl'>{children}</span>
}
