import {FooterStyled} from '../styles/Footer.styled.js'
import {ContainerStyled} from '../styles/Container.styled.js'
import Logo from '../Logo/Logo.jsx'
import Socials from '../Socials/Socials.jsx'

const Footer = () => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <Logo version="light"/>
        <span>&copy; {new Date().getFullYear()} dot.cards text task. All rights reserved</span>
        <Socials/>
      </ContainerStyled>
    </FooterStyled>
  )
}

export default Footer