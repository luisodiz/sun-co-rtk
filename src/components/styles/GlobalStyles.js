import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'
import {inter, getFontSize} from './mixins.js'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
  
  body {
    ${inter.getRegular()}
    ${getFontSize()}
  }
`

export default GlobalStyles