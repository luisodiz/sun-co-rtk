import styled from 'styled-components'

import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import PageTitle from '../../components/PageTitle/PageTitle'
import ProductList from '../../features/products/ProductList'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'

import useFetchProducts from '../../features/products/useFetchProducts'

const ProductsPage = () => {
  const {productsIds, status, error} = useFetchProducts()

  let content
  if (status === 'loading') {
    content = <Loader/>
  } else if (status === 'succeeded') {
    content = (
      <>
        <PageTitle>Our Products</PageTitle>
        <ProductList productsIds={productsIds}/>
      </>
    )
  } else if (status === 'failed') {
    content = (
      <Error hasButton>
        <h2>Please try again later</h2>
        <p>Something went wrong...</p>
        <pre>{error.stack}</pre>
      </Error>
    )
  }

  return (
    <>
      <StyledSection>
        <Container>
          {content}
        </Container>
      </StyledSection>
    </>
  )
}

export default ProductsPage

const StyledSection = styled(Section)`
  padding-top: 0;
`