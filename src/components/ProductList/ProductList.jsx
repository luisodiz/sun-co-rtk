import styled from 'styled-components'

import Row from '../Row/Row'
import Col from '../Col/Col'
import Card from '../Card/Card'

const ProductList = ({products}) => {
  return (
    <div>
      <StyledRow>
        {products?.length > 0 &&
          products.map(({id, preview, title, description, price}) => (
            <StyledCol key={id}>
              <Card
                id={id}
                img={preview}
                title={title}
                description={description}
                price={price}
              />
            </StyledCol>
          ))}
      </StyledRow>
    </div>
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

  @media ${props => props.theme.media.tablet} {
    width: 50%;
    flex: 0 0 50%;
  }

  @media ${props => props.theme.media.desktop} {
    width: 25%;
    flex: 0 0 25%;
  }
`