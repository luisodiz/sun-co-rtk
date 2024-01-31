import styled from 'styled-components'
import {ContainerStyled} from './Container.styled.js'
import {getFontSize, inter} from './mixins.js'
import {LogoStyled} from './Logo.styled.js'
import {SocialsStyled} from './Socials.styled.js'

export const FooterStyled = styled.footer`
  margin-top: auto;
  background: ${({theme}) => theme.footerBg};
  padding: 24px 0;
  
  ${ContainerStyled} {
    display: flex;
    flex-direction: column;
    
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    
    & > ${LogoStyled},
    & > ${SocialsStyled} {
      display: none;
    }

    & > span {
      ${inter.getRegular()};
      ${getFontSize({size: 12, lineHeight: 18})};
      color: #d9dbe1;
      max-width: 167px;
    }
  }
  
  @media (min-width: ${({theme}) => theme.media.desktop}) {    
    ${ContainerStyled} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      
      & > div {
        display: none;
      }
      
      & > ${LogoStyled},
      & > ${SocialsStyled}{
        display: inline-flex;
      }

      & > span {
        max-width: 100%;
        ${getFontSize({size: 14, lineHeight: 24})};
      }
    }
  }
`