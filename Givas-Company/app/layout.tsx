import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reis Office',
  description: 'Created for Reis Office',
  generator: 'Reis Office',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
