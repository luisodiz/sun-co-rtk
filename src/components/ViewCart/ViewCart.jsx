import {ViewCartStyled} from '../styles/ViewCart.styled.js'
import {ButtonIconStyled} from '../styles/Button.styled.js'
import CartIcon from '../../assets/img/cart-icon.svg?react'

const ViewCart = () => {
  return (
    <ViewCartStyled>
      <ButtonIconStyled as={CartIcon}/>
      View Cart
      <span>22</span>
    </ViewCartStyled>
  )
}

export default ViewCart