import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Container from '../Container/Container'
import ViewCart from '../ViewCart/ViewCart'

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo/>
        <ViewCart/>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  padding: 12px 0;
  border-bottom: 1px solid #e9ebee;
  margin-bottom: 30px;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`