import {useSelector} from 'react-redux'
import styled from 'styled-components'

import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'
import Col from '../../components/Col/Col'
import PageTitle from '../../components/PageTitle/PageTitle'
import CartProductList from './CartProductList'
import CartSummary from './CartSummary'

import {selectCartItemsIds} from './cartSlice'

const CartPage = () => {
  const cartItemsIds = useSelector(selectCartItemsIds)

  if (cartItemsIds.length > 0) {
    return (
      <Container>
        <StyledRow>
          <StyledCol className="bag">
            <PageTitle>Your Bag</PageTitle>
            <CartProductList cartItemsIds={cartItemsIds}/>
          </StyledCol>
          <StyledCol className="summary">
            <CartSummary/>
          </StyledCol>
        </StyledRow>
      </Container>
    )
  }

  return (
    <Container>
      <PageTitle>Cart</PageTitle>
      <h3>Cart is empty. Please add products to the cart</h3>
    </Container>
  )
}

export default CartPage

const StyledRow = styled(Row)`
  margin: 0 -12px;
  padding-bottom: 30px;

  @media ${props => props.theme.media.desktop} {
    margin: 0 -21px;
  }
`

const StyledCol = styled(Col)`
  padding: 0 12px;
  width: 100%;
  flex: 0 0 100%;

  &.bag {
    order: 1;
  }

  &.summary {
    order: 0;
    margin-bottom: 48px;
  }

  @media ${props => props.theme.media.desktop} {
    padding: 0 21px;
    width: 50%;
    flex: 0 0 50%;

    &.bag {
      order: 0;
    }

    &.summary {
      order: 1;
      margin-bottom: 0;
    }
  }
`