import {useSelector} from 'react-redux'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {getFontSize, inter} from '../../components/styles/mixins'
import CartIcon from '../../assets/img/cart-icon.svg?react'

import {selectTotalCountCartItems} from './cartSlice'

const CartButton = (props) => {
  const items = useSelector(selectTotalCountCartItems)

  return (
    <StyledCartButton
      to="/cart"
      {...props}
    >
      <StyledIcon/>
      View Cart
      {items > 0
        ? <StyledQuantity>{items}</StyledQuantity>
        : null}
    </StyledCartButton>
  )
}

export default CartButton

const StyledQuantity = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 16px;
  margin-left: 8px;
  height: 16px;
  color: #fff;
  ${inter.getRegular()};
  ${getFontSize({size: 11, lineHeight: 18})};
  background: #ec5e2a;
  border-radius: 10px;
  padding: 0 4.5px;
`

const StyledIcon = styled(CartIcon)`
  width: 13px;
  height: 16px;
  margin-right: 10px;

  path {
    fill: ${props => props.theme.secondaryColor};
  }

  @media ${props => props.theme.media.desktop} {
    width: 16px;
    height: 24px;
  }
`

const StyledCartButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${inter.getBold()};
  ${getFontSize({size: 13, lineHeight: 16})};
  color: ${props => props.theme.secondaryColor};
  padding: 8px 24px;
  background: transparent;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 8px;
  text-decoration: none;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 14, lineHeight: 18})};
    padding: 10px 24px;

    &:hover {
      color: #fff;
      background: #ec5e2a;
      border-color: #ec5e2a;

      ${StyledIcon} {
        path {
          fill: #fff;
        }
      }

      ${StyledQuantity} {
        background: ${props => props.theme.secondaryColor};
      }
    }
  }
`