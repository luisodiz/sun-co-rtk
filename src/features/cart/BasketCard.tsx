import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import styled from 'styled-components'
import { inter, getFontSize, dmSans } from 'components/styles/mixins'
import { formatToUSD } from 'utils/utils.js'

import Flex from 'components/Flex/Flex'
import { ImgWrapper, Title, Subtitle, Price } from 'features/products/Card'
import CountChanger from 'features/cart/CountChanger'

import {
  selectCartItemById,
  removeFromCart,
  updateProduct,
} from 'features/cart/cartSlice'

export interface BasketCardProps {
  productId: string
}

const BasketCard = ({ productId }: BasketCardProps) => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) =>
    selectCartItemById(state, productId)
  )
  const [quantity, setQuantity] = useState(product.quantity)

  useEffect(() => {
    if (product.quantity !== quantity) {
      dispatch(
        updateProduct({
          product,
          quantity,
        })
      )
    }
  }, [quantity, dispatch])

  const handleDecrement = () => {
    if (typeof quantity === 'number' && quantity > 1) {
      setQuantity((prev) => {
        if (typeof prev === 'number') {
          return prev - 1
        }
      })
    }
  }

  const handleIncrement = () => {
    setQuantity((prev) => {
      if (typeof prev === 'number') {
        return prev + 1
      }
    })
  }

  const handleRemoveItem = () => {
    dispatch(removeFromCart(productId))
  }

  return (
    <StyledBasketCard>
      <StyledImgWrapper>
        <img src={product.preview} alt="" />
      </StyledImgWrapper>
      <StyledFlex $direction="column" width="100%">
        <StyledFlex
          $justify="space-between"
          $align="flex-start"
          className="titleWrapper"
        >
          <div className="column">
            <StyledTitle>{product.title}</StyledTitle>
            <StyledTitle $mobile>{product.title}</StyledTitle>
            <StyledSubtitle>{product.subtitle}</StyledSubtitle>
          </div>
          <StyledPrice>
            {formatToUSD(product.totalPrice)}
            <p>
              For one: <span>{formatToUSD(product.priceWithDiscount)}</span>
            </p>
            {product.discount && (
              <p className="discount">
                Total discount:{' '}
                <span>{formatToUSD(product.discountInUsd)}</span>
              </p>
            )}
          </StyledPrice>
        </StyledFlex>
        <StyledSubtitle $mobile>{product.subtitle}</StyledSubtitle>
        <StyledFlex
          $direction="column"
          $align="flex-start"
          className="counterWrapper"
        >
          <StyledCountChanger
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <button className="remove" onClick={handleRemoveItem}>
            Remove
          </button>
        </StyledFlex>
      </StyledFlex>
    </StyledBasketCard>
  )
}

export default BasketCard

const StyledFlex = styled(Flex)`
  .column {
    margin-right: 20px;
    align-self: flex-end;
  }

  &.titleWrapper {
    margin-bottom: 0;
  }

  &.counterWrapper {
    margin-top: auto;
  }

  @media ${(props) => props.theme.media.desktop} {
    .column {
      align-self: flex-start;
    }

    &.titleWrapper {
      margin-bottom: 64px;
    }

    &.counterWrapper {
      flex-direction: row;
      align-items: center;
    }
  }
`

const StyledImgWrapper = styled(ImgWrapper)`
  align-self: flex-start;
  width: 140px;
  flex-shrink: 0;
  margin-bottom: 0;
  margin-right: 20px;

  img {
    height: 141px;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 165px;
    margin-right: 32px;

    img {
      height: 169px;
    }
  }
`

const StyledTitle = styled(Title)<{ readonly $mobile?: boolean }>`
  margin-bottom: 8px;
  display: ${(props) => (props.$mobile ? 'block' : 'none')};

  &:hover {
    color: ${(props) => props.theme.secondaryColor};
  }

  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 6px;
    display: ${(props) => (props.$mobile ? 'none' : 'block')};
  }
`

const StyledSubtitle = styled(Subtitle)<{ readonly $mobile?: boolean }>`
  display: ${(props) => (props.$mobile ? 'block' : 'none')};

  @media ${(props) => props.theme.media.desktop} {
    display: ${(props) => (props.$mobile ? 'none' : 'block')};
  }
`

const StyledPrice = styled(Price)`
  text-align: right;
  margin-left: auto;

  p {
    ${dmSans.getMedium()};
    ${getFontSize({ size: 12, lineHeight: 18 })};
    color: ${(props) => props.theme.mainColor};
    margin: 0 0 2px;

    & > span {
      color: ${(props) => props.theme.secondaryColor};
    }

    &.discount {
      color: #ec5e2a;
    }
  }
`

const StyledCountChanger = styled(CountChanger)`
  margin-bottom: 16px;

  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 0;
  }
`

const StyledBasketCard = styled.article`
  display: flex;
  padding-bottom: 25px;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 25px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  .remove {
    padding: 0;
    background: none;
    border: none;
    ${inter.getBold()};
    ${getFontSize({ size: 14, lineHeight: 20 })};
    text-decoration: underline;
    color: ${(props) => props.theme.mainColor};
    cursor: pointer;
    user-select: none;
  }

  @media ${(props) => props.theme.media.desktop} {
    .remove {
      ${getFontSize({ size: 16, lineHeight: 24 })};
      margin-left: 30px;

      &:hover {
        text-decoration: none;
      }
    }
  }
`
