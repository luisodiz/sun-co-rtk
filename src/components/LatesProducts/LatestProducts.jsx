import Section from '../Section/Section'
import ProductList from '../ProductList/ProductList'
import products from '../../data.json'
import Container from '../Container/Container'

const LatestProducts = () => {
  return (
    <Section>
      <Container>
        <h2>Explore our latest drops</h2>
        Some products will be here...
        <ProductList products={products}/>
      </Container>
    </Section>
  )
}

export default LatestProducts