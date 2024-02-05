import styled, {css} from 'styled-components'
import {inter, getFontSize} from '../styles/mixins'

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${inter.getBold()};
  ${getFontSize({size: 14, lineHeight: 18})};
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.color || '#fff'};
  border: none;
  min-width: 142px;
  padding: 10px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .24s;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 16, lineHeight: 20})};
    padding: 8px 24px;

    &:hover,
    &:focus {
      background: ${props => props.theme.buttonHoverBg};
    }
  }
`

export const StyledButtonLarge = styled(StyledButton)`
  width: 100%;
  padding: 14px 20px;
  ${getFontSize({size: 16, lineHeight: 20})};

  ${({$hasIcon}) => {
    if ($hasIcon) {
      return css`
        span {
          margin-right: 10px;
        }
      `
    }
  }};

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: #fff;
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    ${getFontSize({size: 18, lineHeight: 20})};
  }
`