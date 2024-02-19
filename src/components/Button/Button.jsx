import styled from 'styled-components'
import {inter, getFontSize} from '../styles/mixins'

const Button = ({isLarge, ...props}) => {
  if (isLarge) {
    return <StyledLargeButton {...props}/>
  }
  return (
    <StyledButton {...props} />
  )
}

export default Button

const StyledButton = styled.button`
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
  text-decoration: none;
  cursor: pointer;
  transition: all .24s;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 16, lineHeight: 20})};
    padding: 8px 24px;

    &:hover {
      background: ${props => props.theme.buttonHoverBg};
    }
  }
`

const StyledLargeButton = styled(StyledButton)`
  width: 100%;
  padding: 14px 20px;
  ${getFontSize({size: 16, lineHeight: 20})};

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;

    path {
      fill: #fff;
    }
  }

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 18, lineHeight: 20})};
  }
`