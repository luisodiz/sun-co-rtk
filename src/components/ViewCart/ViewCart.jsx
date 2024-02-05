import {useRef, useEffect} from 'react'
import {StyledViewCart} from './StyledViewCart'
import CartIcon from '../../assets/img/cart-icon.svg?react'
import {Link} from 'react-router-dom'

const ViewCart = (props) => {
  const buttonRef = useRef(null)

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.blur()
    }
  }

  return (
    <StyledViewCart
      as={Link}
      to="/cart"
      ref={buttonRef}
      onClick={() => handleClick()}
      {...props}
    >
      <CartIcon/>
      View Cart
      <span>22</span>
    </StyledViewCart>
  )
}

export default ViewCart