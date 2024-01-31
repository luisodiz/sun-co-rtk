import styled from 'styled-components'
import {ButtonStyled, ButtonIconStyled} from './Button.styled.js'
import {getFontSize} from './mixins.js'

export const ViewCartStyled = styled(ButtonStyled).attrs({
  $isIconLeftSide: true
})`
  background: transparent;
  border: 1px solid ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};
  
  ${ButtonIconStyled} {
    width: 13px;
    height: 16px;
    transition: .2s;
    
    path {
      fill: ${({theme}) => theme.secondaryColor};
    }
  }
  
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 16px;
    margin-left: 8px;
    height: 16px;
    color: #fff;
    ${getFontSize({size: 11, lineHeight: 18})};
    background: #ec5e2a;
    border-radius: 10px;
    padding: 0 4.5px;
    transition: background .22s, transform .2s ease-in;
  }
  
  @media(min-width: ${({theme}) => theme.media.desktop}) {
    ${ButtonIconStyled} {
      width: 16px;
      height: 24px;
    }

    &:hover {
      color: #fff;
      background: #ec5e2a;
      border-color: #ec5e2a;

      ${ButtonIconStyled} {
        path {
          fill: #fff;
        }
      }

      span {
        background: ${({theme}) => theme.secondaryColor};
        transform: scale(.8);
      }
    }
  }
`