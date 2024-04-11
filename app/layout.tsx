import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatBot Clients Management - FocoGrafico',
  description: 'Aplicación para la gestión de clientes de ChatBot'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
