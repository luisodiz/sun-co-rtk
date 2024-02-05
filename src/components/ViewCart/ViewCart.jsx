import {StyledViewCart} from './StyledViewCart'
import CartIcon from '../../assets/img/cart-icon.svg?react'
import {Link} from 'react-router-dom'

const ViewCart = (props) => {
  return (
    <StyledViewCart as={Link} to="/cart" {...props}>
      <CartIcon/>
      View Cart
      <span>22</span>
    </StyledViewCart>
  )
}

export default ViewCart