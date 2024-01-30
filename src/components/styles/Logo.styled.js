import Icon from '../../assets/img/logo-icon.svg?react';

import styled from 'styled-components'
import {inter, getFontSize} from './mixins.js'

export const LogoStyled = styled.a.attrs({
  href: '#'
})`
  display: inline-flex;
  align-items: center;
  color: ${({theme, version}) => version === 'light' ? '#fff' : theme.secondaryColor};
  text-decoration: none;

  span {
    margin-left: 9px;
    ${inter.getRegular()}
    ${getFontSize({size: 16, lineHeight: 24})}
  }
`

export const LogoIconStyled = styled(Icon)`
  width: 24px;
  height: 23px;
  flex-shrink: 0;

  path {
    fill: #a7c6ba;
  }
`