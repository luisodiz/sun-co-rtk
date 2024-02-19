import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import {dmSans, inter, getFontSize} from '../../components/styles/mixins'
import {formatToUSD, getPriceWithDiscount} from '../../utils/utils'

import Summary, {
  Block,
  Title,
} from '../../components/Summary/Summary'
import CountChanger from '../cart/CountChanger'
import Button from '../../components/Button/Button'

import {addToCart} from '../cart/cartSlice'

const ProductSummary = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.currentProduct)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      product,
      quantity
    }))
    setQuantity(1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const priceWithDiscount = getPriceWithDiscount(product.price,
    product.discount || 0)

  return (
    <StyledSummary>
      <Block>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledSubtitle>{product.subtitle}</StyledSubtitle>
        <StyledPrice>{formatToUSD(priceWithDiscount)}</StyledPrice>
        {product.discount
          ?
          <>
            <StyledOldPrice>{formatToUSD(product.price)}</StyledOldPrice>
            <StyledDiscount>Discount: <span>{product.discount}%</span></StyledDiscount>
          </>
          : null}
      </Block>
      <Block $noBorder>
        <StyledCountChangerTitle>Quantity</StyledCountChangerTitle>
        <CountChanger
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          value={quantity}
        />
      </Block>
      <StyledButtonWrapper>
        <Button isLarge onClick={() => handleAddToCart(product)}>Add to
          Cart</Button>
      </StyledButtonWrapper>
    </StyledSummary>
  )
}

export default ProductSummary

const StyledTitle = styled(Title)`
  ${dmSans.getBold()};
  ${getFontSize({size: 18, lineHeight: 24})};
  margin-bottom: 6px;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 24, lineHeight: 32})};
    margin-bottom: 8px;
  }
`

const StyledSubtitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 13px;
  ${inter.getRegular()};
  color: ${props => props.theme.mainColor};
  ${getFontSize({size: 15, lineHeight: 18})};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 20, lineHeight: 24})};
    margin-bottom: 18px;
  }
`

const StyledPrice = styled.span`
  display: inline-block;
  ${dmSans.getMedium()};
  ${getFontSize({size: 18, lineHeight: 18})};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 24, lineHeight: 24})};
  }
`

const StyledOldPrice = styled.span`
  display: inline-block;
  margin-left: 10px;
  text-decoration: line-through
`

const StyledDiscount = styled.p`
  margin-top: 4px;
  margin-bottom: 0;
  color: #ec5e2a;

  span {
    ${dmSans.getMedium()};
  }
`

const StyledCountChangerTitle = styled.p`
  ${dmSans.getBold()};
  ${getFontSize({size: 14, lineHeight: 15})};
  margin: 0 0 12px;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 18, lineHeight: 20})};
  }
`

const StyledButtonWrapper = styled.div`
  padding: 0 24px 24px;
  margin-top: auto;

  @media ${props => props.theme.media.desktop} {
    padding: 0 36px 36px;
  }
`

const StyledSummary = styled(Summary)`
  @media ${props => props.theme.media.desktop} {
    height: 100%;
  }
`