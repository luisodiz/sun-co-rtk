import Logo from '../Logo/Logo.jsx';
import {Container} from '../Container/Container.jsx'
import ViewCart from '../ViewCart/ViewCart.jsx'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  padding: 12px 0;
  border-bottom: 1px solid #e9ebee;
  
  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo/>
        <ViewCart/>
      </Container>
    </HeaderStyled>
  );
};

export default Header;