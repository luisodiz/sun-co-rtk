import styled from 'styled-components'
import Row from '../Row/Row'
import Col from '../Col/Col'
import Card from '../Card/Card'

const StyledProductList = styled.div`
  .row {
    margin-bottom: -24px;
  }

  .col {
    width: 100%;
    flex: 0 0 100%;
    margin-bottom: 24px;
  }


  @media ${({theme}) => theme.media.tablet} {
    .col {
      width: 50%;
      flex: 0 0 50%;
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    .col {
      width: 25%;
      flex: 0 0 25%;
    }
  }
`

const ProductList = ({products, ...props}) => {
  return (
    <StyledProductList {...props}>
      <Row className="row">
        {products?.length > 0 &&
          products.map(({id, preview, title, description, price}) => (
            <Col key={id} className="col">
              <Card
                id={id}
                img={preview}
                title={title}
                description={description}
                price={price}
              />
            </Col>
          ))}
      </Row>
    </StyledProductList>
  )
}

export default ProductList