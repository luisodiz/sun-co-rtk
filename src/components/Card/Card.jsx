import {
  StyledCardImage,
  StyledCardTitle,
  StyledCardDesc,
  StyledCardPrice,
  StyledCard
} from './StyledCard'
import Flex from '../Flex/Flex'

const Card = ({id, img, title, description, price, ...props}) => {
  return (
    <StyledCard {...props}>
      <StyledCardImage to={`products/${id}`}>
        <img src={img} alt="Nike"/>
      </StyledCardImage>
      <Flex
        $direction="column"
        $align="flex-start"
      >
        <StyledCardTitle
          to={`products/${id}`}
        >
          {title}
        </StyledCardTitle>
        <StyledCardDesc>{description}</StyledCardDesc>
        <StyledCardPrice>${price}</StyledCardPrice>
      </Flex>
    </StyledCard>
  )
}

export default Card