import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { inter, getFontSize } from 'components/styles/mixins'
import LogoIcon from 'assets/img/logo-icon.svg?react'

const StyledLogo = styled(Link).attrs<LogoProps>(() => ({ to: '/' }))`
  display: inline-flex;
  align-items: center;
  color: ${(props) =>
    props.$version === 'light' ? '#fff' : props.theme.secondaryColor};
  text-decoration: none;

  span {
    ${inter.getSemiBold()};
    ${getFontSize({ size: 16, lineHeight: 24 })};
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

interface LogoProps {
  $version?: string
  className?: string
  to?: string
  props?: any[]
}

const Logo = (props: LogoProps) => {
  return (
    <StyledLogo className={props.className} {...props}>
      <Icon />
      <span>SUN CO.</span>
    </StyledLogo>
  )
}

export default Logo
