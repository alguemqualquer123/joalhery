import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joalheria',
  description: 'Creado por SR VINIX',
  generator: 'SR VINIX - alguemqualquer123',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-w-screen min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  )
}
