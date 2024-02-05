import Flex from '../Flex/Flex'
import {StyledBasketCard, StyledRemoveButton} from './StyledBasketCard'
import {
  StyledCardTitle,
  StyledCardDesc,
  StyledCardPrice,
  StyledCardImage
} from '../Card/StyledCard'
import CountChanger from '../CountChanger/CountChanger'

const BasketCard = ({title, preview, description, price}) => {
  return (
    <StyledBasketCard>
      <StyledCardImage as="div">
        <img src={preview} alt=""/>
      </StyledCardImage>
      <div>
        <Flex
          className="title-wrapper"
          $justify="space-between"
          $align="flex-start"
        >
          <div>
            <StyledCardTitle as="h3">{title}</StyledCardTitle>
            <StyledCardDesc>{description}</StyledCardDesc>
          </div>
          <StyledCardPrice>${price}</StyledCardPrice>
        </Flex>
        <Flex className="counter-wrapper">
          <CountChanger/>
          <StyledRemoveButton>Remove</StyledRemoveButton>
        </Flex>
      </div>
    </StyledBasketCard>
  )
}

export default BasketCard