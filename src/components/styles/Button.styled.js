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
  ${getFontSize({size: 14, lineHeight: 18})}
  background: ${({theme}) => theme.secondaryColor};
  color: #fff;
  border: none;
  min-width: 142px;
  padding: 10px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .24s;
  
  ${ButtonIconStyled} {
    margin-left: ${({$isIconLeftSide}) => !$isIconLeftSide ? '10px' : '0'};
    margin-right: ${({$isIconLeftSide}) => $isIconLeftSide ? '10px' : '0'};
  }
  
  @media(min-width: ${({theme}) => theme.media.desktop}) {
    ${getFontSize({size: 16, lineHeight: 20})}
    padding: 8px 24px;

    &:hover {
      background: ${({theme}) => theme.buttonHoverBg};
    }
  }
`

export const ButtonBigStyled = styled(ButtonStyled)`
  width: 100%;
  padding: 14px 20px;
  ${getFontSize({size: 16, lineHeight: 20})};
  
  @media(min-width: ${({theme}) => theme.media.desktop}) {
    padding: 22px 30px;
    ${getFontSize({size: 18, lineHeight: 20})};
  }
`