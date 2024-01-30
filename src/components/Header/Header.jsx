import Logo from '../Logo/Logo.jsx';
import ViewCart from '../ViewCart/ViewCart.jsx'
import {HeaderStyled} from '../styles/Header.styled.js'
import {ContainerStyled} from '../styles/Container.styled.js'


const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Logo/>
        <ViewCart/>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;