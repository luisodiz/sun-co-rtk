import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { dmSans, getFontSize } from 'components/styles/mixins'

import Container from 'components/Container/Container'
import Row from 'components/Row/Row'
import Col from 'components/Col/Col'
import DetailsSlider from './DetailsSlider'
import ProductSummary from './ProductSummary'
import Loader from 'components/Loader/Loader'

import {
  addCurrentProduct,
  clearCurrentProduct,
  fetchProductById,
} from './productsSlice'

const DetailsPage = () => {
  const { productId } = useParams()
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.products.currentProduct)
  const [requestStatus, setRequestStatus] = useState('idle')

  useEffect(() => {
    async function fetchProduct() {
      try {
        setRequestStatus('loading')
        if (productId) {
          const data = await dispatch(fetchProductById(productId)).unwrap()
          dispatch(addCurrentProduct(data))
          setRequestStatus('succeeded')
        }
      } catch (err) {
        console.log(err)
        setRequestStatus('failed')
      }
    }

    if (productId && !product) {
      fetchProduct()
    }

    return function () {
      dispatch(clearCurrentProduct())
    }
  }, [productId, dispatch])

  let content
  if (!product && requestStatus === 'loading') {
    content = (
      <StyledSection>
        <Loader />
      </StyledSection>
    )
  } else if (product && requestStatus === 'succeeded') {
    const { preview, details } = product

    content = (
      <>
        <StyledSection>
          <StyledRow>
            <StyledCol>
              {(!details?.images || !details.images.length) && (
                <img src={preview} alt="title" />
              )}
              {details?.images && details.images.length && (
                <DetailsSlider slides={details.images} />
              )}
            </StyledCol>
            <StyledCol className="summary">
              <ProductSummary />
            </StyledCol>
          </StyledRow>
        </StyledSection>
        <StyledSection>
          <StyledRow className="description">
            <StyledCol>
              <StyledTitle>Description</StyledTitle>
              <p>
                Energize your look with a fresh take on heritage adidas style.
                The adidas Daily 3.0 Shoes cut a classic profile with a modern
                suede upper. Your walk across campus or commute across town has
                never looked or felt this good.
              </p>
              <ul>
                <li>Regular fit</li>
                <li>Lace closure</li>
                <li>Rubber outsole with vulcanized look</li>
                <li>Imported</li>
              </ul>
            </StyledCol>
            <StyledCol>
              <StyledImg src={preview} alt="" />
            </StyledCol>
          </StyledRow>
        </StyledSection>
      </>
    )
  } else if (requestStatus === 'failed') {
    content = (
      <StyledSection>
        <h2>Something has wrong..</h2>
      </StyledSection>
    )
  }

  return <Container>{content}</Container>
}

export default DetailsPage

const StyledSection = styled.section`
  margin-bottom: 40px;

  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 64px;
  }
`

const StyledRow = styled(Row)`
  margin: 0 -12px;

  @media ${(props) => props.theme.media.desktop} {
    margin: 0 -21px;
  }
`

const StyledCol = styled(Col)`
  padding: 0 12px;
  width: 100%;
  flex: 0 0 100%;

  &.summary {
    margin-top: 24px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 0 21px;
    width: 50%;
    flex: 0 0 50%;

    &.summary {
      margin-top: 0;
    }
  }
`

const StyledTitle = styled.h3`
  ${dmSans.getBold()};
  ${getFontSize({ size: 20, lineHeight: 24 })};
  padding-bottom: 8px;
  border-bottom: 1px solid #e9e9e9;

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 24, lineHeight: 32 })};
    padding-bottom: 10px;
  }
`

const StyledImg = styled.img`
  border-radius: 13px;
  height: 248px;

  @media ${(props) => props.theme.media.desktop} {
    height: auto;
  }
`
