import styled from 'styled-components'
import {inter, getFontSize} from '../styles/mixins'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${inter.getBold()};
  ${getFontSize({size: 14, lineHeight: 18})};
  background: ${({bg, theme}) => bg || theme.secondaryColor};
  color: ${({color}) => color || '#fff'};
  border: none;
  min-width: 142px;
  padding: 10px 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .24s;
  
  @media ${({theme}) => theme.media.desktop} {
    ${getFontSize({size: 16, lineHeight: 20})};
    padding: 8px 24px;

    &:hover {
      background: ${({theme}) => theme.buttonHoverBg};
    }
  }
`

const Button = (props) => {
  return (
    <StyledButton {...props} />
  )
}

export default Button