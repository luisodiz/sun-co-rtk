import React from 'react'
import styled from 'styled-components'

import { useAppSelector } from 'app/hooks'
import { dmSans, getFontSize } from 'components/styles/mixins'
import { formatToUSD } from 'utils/utils.js'

import Summary, { Block, Title } from 'components/Summary/Summary'
import Button from 'components/Button/Button'
import Arrow from 'assets/img/arrow-right.svg?react'

import { selectAllCartItems } from 'features/cart/cartSlice'

const CartSummary: React.FC = () => {
  const products = useAppSelector(selectAllCartItems)
  // Простой расчет налога, без излишеств
  const delivery = useAppSelector((state) => state.cart.delivery)
  const tax = useAppSelector((state) => state.cart.tax)

  const productsTotal = products.reduce((acc, product) => {
    if (product.totalPrice) {
      return acc + product.totalPrice
    }
    return acc
  }, 0)

  const productsTotalDiscount = products.reduce((acc, product) => {
    if (product.discountInUsd) {
      return acc + product.discountInUsd
    }
    return acc
  }, 0)

  const total = productsTotal + delivery + tax

  return (
    <Summary>
      <StyledTitle>Summary</StyledTitle>
      <Block>
        <StyledList>
          <li>
            <span>Subtotal</span>
            <StyledPrice>{formatToUSD(productsTotal)}</StyledPrice>
          </li>
          <li>
            <span>Shipping and delivery</span>
            <StyledPrice>{formatToUSD(delivery)}</StyledPrice>
          </li>
          <li>
            <span>Tax</span>
            <StyledPrice>{formatToUSD(tax)}</StyledPrice>
          </li>
          {productsTotalDiscount ? (
            <li>
              <span>Discount</span>
              <StyledPrice color="#EC5E2A">
                $-{productsTotalDiscount.toFixed(2)}
              </StyledPrice>
            </li>
          ) : null}
        </StyledList>
      </Block>
      <Block $noBorder>
        <StyledList>
          <li className="total">
            <span>Total</span>
            <StyledPrice>{formatToUSD(total)}</StyledPrice>
          </li>
        </StyledList>
      </Block>
      <StyledButtonWrapper>
        <Button $isLarge>
          Checkout
          <Arrow className="icon" />
        </Button>
      </StyledButtonWrapper>
    </Summary>
  )
}

export default CartSummary

const StyledTitle = styled(Title)`
  padding: 32px 20px 0;

  @media ${(props) => props.theme.media.desktop} {
    padding: 36px 36px 0;
  }
`

const StyledPrice = styled.span`
  color: ${(props) => props.color || props.theme.secondaryColor};
`

const StyledButtonWrapper = styled.div`
  padding: 0 24px 24px;
  margin-top: auto;

  @media ${(props) => props.theme.media.desktop} {
    padding: 0 36px 36px;
  }
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    ${dmSans.getMedium()};
    ${getFontSize({ size: 16, lineHeight: 18 })};

    &:last-child {
      margin-bottom: 0;
    }

    &.total {
      ${dmSans.getBold()};
      ${getFontSize({ size: 18, lineHeight: 24 })};

      ${StyledPrice} {
        ${dmSans.getMedium()};
        ${getFontSize({ size: 16, lineHeight: 18 })};
      }
    }
  }

  @media ${(props) => props.theme.media.desktop} {
    li {
      ${getFontSize({ size: 20, lineHeight: 24 })};
      margin-bottom: 20px;

      &.total {
        ${getFontSize({ size: 24, lineHeight: 32 })};

        ${StyledPrice} {
          ${getFontSize({ size: 20, lineHeight: 24 })};
        }
      }
    }
  }
`
