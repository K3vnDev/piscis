import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Piscis</title>
      </head>
      {children}
    </html>
  )
}
