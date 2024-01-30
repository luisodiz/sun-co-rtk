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
  
  h1, 
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
`

export default GlobalStyles