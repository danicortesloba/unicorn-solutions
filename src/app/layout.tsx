import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from "./layout.module.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unicorn Solutions',
  description: 'Soluciones digitales para tu empresa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body className={styles.Body}>{children}</body>
    </html>
  )
}
