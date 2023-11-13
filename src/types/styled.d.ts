import 'styled-components'

interface Theme {
  colors: {
    primary: string
    darkerPrimary: string
    black: string
    darkGray: string
    lightGray: string
  }
  borderRadius: {
    sm: string
    md: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
