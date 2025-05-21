import { LogoIcon } from '../images/logoIcon'
import { LogoText } from '../images/logoText'

export const Logo = () => {
  const logoIconSize = 130
  const logoTextWH = { w: 300, h: 50 }

  return (
    <div className='flex items-center justify-center gap-2 mb-4'>
      <LogoIcon w={logoIconSize} h={logoIconSize} />
      <LogoText {...logoTextWH} />
    </div>
  )
}
