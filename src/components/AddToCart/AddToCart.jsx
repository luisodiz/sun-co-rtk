import {StyledAddToCart} from './StyledAddToCart'
import {StyledBlockInfoItem} from '../BlockInfo/StyledBlockInfo'
import {StyledCardDesc, StyledCardPrice} from '../Card/StyledCard'
import CountChanger from '../CountChanger/CountChanger'
import {StyledButtonLarge} from '../Button/StyledButton'
import Flex from '../Flex/Flex'

const AddToCart = () => {
  return (
    <StyledAddToCart>
      <StyledBlockInfoItem>
        <h1>adidas</h1>
        <StyledCardDesc>DAILY 3.0 SHOES</StyledCardDesc>
        <StyledCardPrice>$98.99</StyledCardPrice>
      </StyledBlockInfoItem>
      <StyledBlockInfoItem>
        <Flex
          $direction="column"
          $align="flex-start"
          height="100%"
        >
          <span className="quantity-title">Quantity</span>
          <CountChanger/>
          <StyledButtonLarge>
            Add to Cart
          </StyledButtonLarge>
        </Flex>
      </StyledBlockInfoItem>
    </StyledAddToCart>
  )
}

export default AddToCart