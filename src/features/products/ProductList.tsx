import type { Product } from 'types'

import styled from 'styled-components'

import Row from 'components/Row/Row'
import Col from 'components/Col/Col'
import Card from 'features/products/Card'

interface ProductListProps {
  productsIds?: Product['id'][]
}

const ProductList = ({ productsIds }: ProductListProps) => {
  return (
    <StyledRow>
      {productsIds &&
        productsIds.map((productId) => (
          <StyledCol key={productId}>
            <Card productId={productId} />
          </StyledCol>
        ))}
    </StyledRow>
  )
}

export default ProductList

const StyledRow = styled(Row)`
  margin: 0 -12px -24px;
`

const StyledCol = styled(Col)`
  width: 100%;
  flex: 0 0 100%;
  padding: 0 12px;
  margin-bottom: 24px;

  @media ${(props) => props.theme.media.tablet} {
    width: 50%;
    flex: 0 0 50%;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 25%;
    flex: 0 0 25%;
  }
`
