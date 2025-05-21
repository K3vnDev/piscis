export const LoginBackground = () => {
  const bgImage = './auth_usb_bg.webp'

  return (
    <div
      className='fixed w-screen h-screen top-0 left-0 bg-cover bg-center -z-50'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='absolute inset-0 bg-green-600 opacity-60 mix-blend-multiply' />
    </div>
  )
}
