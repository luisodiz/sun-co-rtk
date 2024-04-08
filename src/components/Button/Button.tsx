import React from 'react'
import type { ExecutionProps } from 'styled-components'
import styled from 'styled-components'

import { inter, getFontSize } from 'components/styles/mixins'

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${inter.getBold()};
  ${getFontSize({ size: 14, lineHeight: 18 })};
  background: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.color || '#fff'};
  border: none;
  min-width: 142px;
  padding: 10px 24px;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.24s;

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 16, lineHeight: 20 })};
    padding: 8px 24px;

    &:hover {
      background: ${(props) => props.theme.buttonHoverBg};
    }
  }
`

const ButtonLargeStyled = styled(ButtonStyled)`
  width: 100%;
  padding: 14px 20px;
  ${getFontSize({ size: 16, lineHeight: 20 })};

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;

    path {
      fill: #fff;
    }
  }

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 18, lineHeight: 20 })};
  }
`

interface Button extends ExecutionProps {
  readonly $isLarge?: boolean
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  to?: string
}

const Button = (props: Button) => {
  if (props.$isLarge) {
    return <ButtonLargeStyled {...props} />
  }
  return <ButtonStyled {...props} />
}

export default Button
