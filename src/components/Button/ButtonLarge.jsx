import styled, {css} from 'styled-components'
import Button from './Button'
import {getFontSize} from '../styles/mixins'

const StyledButtonLarge = styled(Button)`
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
  
  .icon {
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

const ButtonLarge = (props) => {
  return (
    <StyledButtonLarge {...props} />
  )
}

export default ButtonLarge