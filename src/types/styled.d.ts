import 'styled-components'

interface Theme {
  colors: {
    primary: string
    darkerPrimary: string
    black: string
    darkGray: string
  }
  borderRadius: {
    sm: string
    md: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
