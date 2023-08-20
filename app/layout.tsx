import './globals.css'
import type { Metadata } from 'next'
import { Khula } from 'next/font/google'

const khula = Khula({
  weight: '300',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'irenkens',
  description: 'irenkens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={khula.className}>{children}</body>
    </html>
  )
}
