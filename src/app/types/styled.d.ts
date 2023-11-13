import 'styled-components'

interface Theme {
  colors: {
    primary: string
    white: string
    black: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
