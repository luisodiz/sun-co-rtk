import styled from 'styled-components'
import {ContainerStyled} from './Container.styled.js'
import {getFontSize, inter} from './mixins.js'

export const FooterStyled = styled.footer`
  margin-top: auto;
  background: ${({theme}) => theme.footerBg};
  padding: 24px 0;
  
  ${ContainerStyled} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  span {
    ${inter.getRegular()}
    ${getFontSize({size: 14, lineHeight: 24})}
    color: #d9dbe1;
  }
`