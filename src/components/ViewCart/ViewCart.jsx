import {StyledViewCart} from './StyledViewCart'
import CartIcon from '../../assets/img/cart-icon.svg?react'

const ViewCart = (props) => {
  return (
    <StyledViewCart {...props}>
      <CartIcon/>
      View Cart
      <span>22</span>
    </StyledViewCart>
  )
}

export default ViewCart