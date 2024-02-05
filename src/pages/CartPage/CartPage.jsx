import {StyledCartPage} from './StyledCartPage'
import Row from '../../components/Row/Row'
import Col from '../../components/Col/Col'
import {StyledPageTitle} from '../../components/PageTitle/StyledPageTitle'
import {StyledCardPrice} from '../../components/Card/StyledCard'
import CartProductList from '../../components/CartProductList/CartProductList'
import BlockInfo from '../../components/BlockInfo/BlockInfo'
import {
  StyledBlockInfoTitle,
  StyledBlockInfoItem,
  StyledBlockInfoList
} from '../../components/BlockInfo/StyledBlockInfo'
import {StyledButtonLarge} from '../../components/Button/StyledButton'
import Arrow from '../../assets/img/arrow-right.svg?react'

const data = [
  {
    id: 1,
    preview: '/img/preview.jpg',
    title: 'Off-White',
    description: 'Out Of Office "Ooo" sneakers',
    price: 775,
  },
  {
    id: 2,
    preview: '/img/preview.jpg',
    title: 'Off-White',
    description: 'Out Of Office "Ooo" sneakers',
    price: 775,
  }
]

const CartPage = () => {
  return (
    <StyledCartPage>
      <Row>
        <Col className="your-bag">
          <StyledPageTitle>Your Bag</StyledPageTitle>
          <CartProductList products={data}/>
        </Col>
        <Col className="your-summary">
          <BlockInfo>
            <StyledBlockInfoTitle>Summary</StyledBlockInfoTitle>
            <StyledBlockInfoItem>
              <StyledBlockInfoList>
                <li>
                  <span>Subtotal</span>
                  <StyledCardPrice>$90.00</StyledCardPrice>
                </li>
                <li>
                  <span>Shipping and delivery</span>
                  <StyledCardPrice>$20.00</StyledCardPrice>
                </li>
                <li>
                  <span>Tax</span>
                  <StyledCardPrice>$6.00</StyledCardPrice>
                </li>
                <li>
                  <span>Discount</span>
                  <StyledCardPrice color="#EC5E2A">$-6.00</StyledCardPrice>
                </li>
              </StyledBlockInfoList>
            </StyledBlockInfoItem>
            <StyledBlockInfoItem>
              <StyledBlockInfoList>
                <li>
                  <span className="total">Total </span>
                  <StyledCardPrice>$164.46</StyledCardPrice>
                </li>
              </StyledBlockInfoList>
              <div className="end">
                <StyledButtonLarge $hasIcon>
                  <span>Checkout</span>
                  <Arrow/>
                </StyledButtonLarge>
              </div>
            </StyledBlockInfoItem>
          </BlockInfo>
        </Col>
      </Row>
    </StyledCartPage>
  )
}

export default CartPage