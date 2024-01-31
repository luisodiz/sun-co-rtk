import {CardStyled, CardInfoStyled} from '../styles/Card.styled.js'
import {ImageStyled} from '../styles/Image.styled.js'

const Card = ({img, title, description, price}) => {
  return (
    <CardStyled>
      <a href="#">
        <ImageStyled src={img} alt="Nike"/>
      </a>
      <CardInfoStyled>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>${price}</span>
      </CardInfoStyled>
    </CardStyled>
  )
}

export default Card