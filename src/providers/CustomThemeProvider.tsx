'use client'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

type Props = {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default CustomThemeProvider
