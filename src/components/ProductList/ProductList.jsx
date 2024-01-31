import {RowStyled} from '../styles/Row.styled.js'
import {ColStyled} from '../styles/Col.styled.js'
import {ProductListStyled} from '../styles/ProductList.styled.js'
import Card from '../Card/Card.jsx'

const ProductList = ({products}) => {
  return (
    <ProductListStyled>
      <RowStyled>
        {products?.length > 0 &&
          products.map(({id, preview, title, description, price}) => (
            <ColStyled key={id}>
              <Card
                img={preview}
                title={title}
                description={description}
                price={price}
              />
            </ColStyled>
          ))}
      </RowStyled>
    </ProductListStyled>
  )
}

export default ProductList