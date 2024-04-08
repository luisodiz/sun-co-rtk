import styled from 'styled-components'

import Section from 'components/Section/Section'
import ProductList from 'features/products/ProductList'
import Container from 'components/Container/Container'
import ProductsSlider from 'features/products/ProductsSlider'
import Loader from 'components/Loader/Loader'
import Error from 'components/Error/Error'

import useFetchProducts from 'features/products/useFetchProducts'

const LatestProducts = () => {
  const { productsIds, status, error } = useFetchProducts()

  let content
  if (status === 'loading') {
    content = <Loader />
  } else if (status === 'succeeded') {
    content = (
      <>
        <Container className="products-container">
          <ProductList productsIds={productsIds} />
        </Container>
        <ProductsSlider />
      </>
    )
  } else if (status === 'failed' && error) {
    content = (
      <Container>
        <Error>
          <h2>Please try again later</h2>
          <p>{error.message}</p>
        </Error>
      </Container>
    )
  }

  return (
    <StyledLatestProducts>
      <Container>
        <h2>Explore our latest drops</h2>
      </Container>
      {content}
    </StyledLatestProducts>
  )
}

export default LatestProducts

const StyledLatestProducts = styled(Section)`
  .products-container {
    display: none;
  }

  @media ${(props) => props.theme.media.tablet} {
    .products-container {
      display: block;
    }
  }
`
