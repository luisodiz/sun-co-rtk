import React from 'react'

import styled from 'styled-components'
import { inter, getFontSize } from 'components/styles/mixins'
import Container from 'components/Container/Container'
import Logo from 'components/Logo/Logo'
import Socials from 'components/Socials/Socials'

const StyledFooter = styled.footer`
  margin-top: auto;
  background: ${({ theme }) => theme.footerBg};
  padding: 24px 0;

  .wrapper {
    display: flex;
    flex-direction: column;

    &-mobile {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }

  span {
    ${inter.getRegular()};
    ${getFontSize({ size: 12, lineHeight: 18 })};
    color: #d9dbe1;
    max-width: 167px;
  }

  .logo-desktop,
  .socials-desktop {
    display: none;
  }

  @media ${({ theme }) => theme.media.tablet} {
    .wrapper {
      flex-direction: row;
      justify-content: space-between;

      &-mobile {
        display: none;
      }
    }

    span {
      max-width: 100%;
      ${getFontSize({ size: 14, lineHeight: 24 })};
    }

    .logo-desktop,
    .socials-desktop {
      display: inline-flex;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container className="wrapper">
        <div className="wrapper-mobile">
          <Logo version="light" />
          <Socials />
        </div>
        <Logo version="light" href="#" className="logo-desktop" />
        <span>
          &copy; {new Date().getFullYear()} dot.cards text task. All rights
          reserved
        </span>
        <Socials className="socials-desktop" />
      </Container>
    </StyledFooter>
  )
}

export default Footer
