import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'
import {inter, getFontSize} from './mixins.js'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  ;

  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    ${inter.getRegular()};
    ${getFontSize({size: 16, lineHeight: 20})};
    background: #fff;
    height: 100%;
    min-height: 100vh;

    @media (min-width: ${({theme}) => theme.media.desktop}) {
      ${getFontSize()};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyles