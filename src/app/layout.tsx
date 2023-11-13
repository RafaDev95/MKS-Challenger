import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.css'

import CustomThemeProvider from './providers/CustomThemeProvider'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Sistemas - Challenger',
  description: 'MKS Sistemas - Challenger',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  )
}
