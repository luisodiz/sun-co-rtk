import styled from 'styled-components'
import Logo from '../Logo/Logo';
import Container from '../Container/Container'
import ViewCart from '../ViewCart/ViewCart'


const StyledHeader = styled.header`
  padding: 12px 0;
  border-bottom: 1px solid #e9ebee;
  
  .line {
    display: flex;
    justify-content: space-between;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Container className="line">
        <Logo href="#"/>
        <ViewCart/>
      </Container>
    </StyledHeader>
  );
};

export default Header;