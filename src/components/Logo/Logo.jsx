import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {inter, getFontSize} from '../styles/mixins'
import LogoIcon from '../../assets/img/logo-icon.svg?react'

const StyledLogo = styled(Link).attrs(() => ({to: '/'}))`
  display: inline-flex;
  align-items: center;
  color: ${({theme, version}) => version === 'light'
    ? '#fff'
    : theme.secondaryColor};
  text-decoration: none;

  span {
    ${inter.getSemiBold()};
    ${getFontSize({size: 16, lineHeight: 24})};
    margin-left: 9px;
  }
`

const Icon = styled(LogoIcon)`
  width: 24px;
  height: 23px;
  flex-shrink: 0;

  path {
    fill: #a7c6ba;
  }
`

const Logo = (props) => {
  return (
    <StyledLogo {...props}>
      <Icon/>
      <span>SUN CO.</span>
    </StyledLogo>
  )
}

export default Logo
