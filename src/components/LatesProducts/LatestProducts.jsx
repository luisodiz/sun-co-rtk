import styled from 'styled-components'
import Section from '../Section/Section'
import ProductList from '../ProductList/ProductList'
import products from '../../data.json'
import Container from '../Container/Container'
import ProductsSlider from '../ProductsSlider/ProductsSlider'

const LatestProducts = () => {
  return (
    <StyledLatestProducts>
      <Container>
        <h2>Explore our latest drops</h2>
      </Container>
      <Container className="products-container">
        <ProductList products={products}/>
      </Container>
      <ProductsSlider products={products}/>
    </StyledLatestProducts>
  )
}

export default LatestProducts

const StyledLatestProducts = styled(Section)`
  .products-container {
    display: none;
  }

  @media ${props => props.theme.media.tablet} {
    .products-container {
      display: block;
    }
  }
`