import {StyledProductList} from './StyledProductList'
import Row from '../Row/Row'
import Col from '../Col/Col'
import Card from '../Card/Card'

const ProductList = ({products}) => {
  return (
    <StyledProductList>
      <Row className="row">
        {products?.length > 0 &&
          products.map(({id, preview, title, description, price}) => (
            <Col key={id}>
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