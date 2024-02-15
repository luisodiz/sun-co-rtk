import styled from 'styled-components'

import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'
import Col from '../../components/Col/Col'
import PageTitle from '../../components/PageTitle/PageTitle'
import CartProductList from '../../components/CartProductList/CartProductList'
import CartSummary from '../../components/CartSummary/CartSummary'

const data = [
  {
    id: 1,
    preview: '/img/preview.jpg',
    title: 'Off-White',
    description: 'Out Of Office "Ooo" sneakers',
    price: 775,
  },
  {
    id: 2,
    preview: '/img/preview.jpg',
    title: 'Off-White',
    description: 'Out Of Office "Ooo" sneakers',
    price: 775,
  }
]

const CartPage = () => {
  return (
    <Container>
      <StyledRow>
        <StyledCol className="bag">
          <PageTitle>Your Bag</PageTitle>
          <CartProductList products={data}/>
        </StyledCol>
        <StyledCol className="summary">
          <CartSummary/>
        </StyledCol>
      </StyledRow>
    </Container>
  )
}

export default CartPage

const StyledRow = styled(Row)`
  margin: 0 -12px;

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