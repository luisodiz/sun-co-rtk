import styled from 'styled-components'
import {ButtonStyled, ButtonIconStyled} from './Button.styled.js'
import {getFontSize} from './mixins.js'

export const ViewCartStyled = styled(ButtonStyled).attrs({
  $isIconLeftSide: true
})`
  ${getFontSize({size: 16, lineHeight: 24})}
  background: transparent;
  border: 1px solid ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};
  
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
  
  ${ButtonIconStyled} {
    path {
      fill: ${({theme}) => theme.secondaryColor};
    }
  }
  
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 16px;
    height: 16px;
    color: #fff;
    ${getFontSize({size: 11, lineHeight: 18})};
    background: #ec5e2a;
    border-radius: 10px;
    padding: 0 4.5px;
    margin-left: 10px;
    transition: background .22s, transform .2s ease-in;
  }
`