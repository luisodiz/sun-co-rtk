import styled from 'styled-components';
import Icon from '../../assets/img/cart-icon.svg?react'

const CartIcon = styled(Icon)`
  width: 16px;
  height: 24px;
  flex-shrink: 0;
  margin-right: 10px;
  
  path {
    fill: #201b21;
    transition: fill .3s ease;
  }
`

const ViewCartStyled = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 11px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  color: #201b21;
  border: 1px solid #201b21;
  border-radius: 8px;
  background-color: transparent;
  transition: .3s ease;
  cursor: pointer;
  
  &:hover {
    color: #fff;
    background-color: #201b21;
    
    ${CartIcon} path {
      fill: #fff;
    }
  }
`

const ViewCart = () => {
  return (
    <ViewCartStyled>
      <CartIcon/>
      Корзина
    </ViewCartStyled>
  )
}

export default ViewCart