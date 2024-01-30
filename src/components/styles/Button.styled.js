import styled from 'styled-components'
import {getFontSize, inter} from './mixins'

export const ButtonIconStyled = styled.svg`
  flex-shrink: 0;
  display: inline-block;
  
  path {
    transition: all .3s;
  }
`

export const ButtonStyled = styled.button.attrs({
  $isIconLeftSide: false
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${inter.getBold()}
  ${getFontSize({size: 16, lineHeight: 20})}
  background: ${({theme}) => theme.secondaryColor};
  color: #fff;
  border: none;
  min-width: 142px;
  padding: 8px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .24s;
  
  ${ButtonIconStyled} {
    margin-left: ${({$isIconLeftSide}) => !$isIconLeftSide ? '10px' : '0'};
    margin-right: ${({$isIconLeftSide}) => $isIconLeftSide ? '10px' : '0'};
  }
  
  &:hover {
    background: ${({theme}) => theme.buttonHoverBg};
  }
`