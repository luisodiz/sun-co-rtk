import styled from 'styled-components'
import Logo from 'components/Logo/Logo'
import Container from 'components/Container/Container'
import CartButton from 'features/cart/CartButton'

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Logo />
        <CartButton />
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
