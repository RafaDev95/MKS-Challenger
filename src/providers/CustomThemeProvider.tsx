'use client'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import ReactQueryProvider from './ReactQueryProvider'
import ToastProvider from './ToastProvider'

type Props = {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider />
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  )
}
export default CustomThemeProvider
