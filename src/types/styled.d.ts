import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string
    secondaryColor: string
    buttonHoverBg: string
    footerBg: string
    media: {
      desktop: string
      tablet: string
    }
  }
}
