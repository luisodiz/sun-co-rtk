import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {dmSans, getFontSize, inter} from '../styles/mixins'
import Flex from '../Flex/Flex'

export const ImgWrapper = (props) => <StyledImgWrapper {...props}/>

export const Title = (props) => <StyledTitle {...props}/>

export const Subtitle = (props) => <StyledSubtitle {...props}/>

export const Price = (props) => <StyledPrice {...props}/>

const Card = ({id, img, title, description, price}) => {
  return (
    <article>
      <ImgWrapper as={Link} to={`products/${id}`}>
        <img src={img} alt="Nike"/>
      </ImgWrapper>
      <Flex
        $direction="column"
        $align="flex-start"
      >
        <Title
          as={Link}
          to={`products/${id}`}
        >
          {title}
        </Title>
        <Subtitle>{description}</Subtitle>
        <Price>${price}</Price>
      </Flex>
    </article>
  )
}

export default Card

const StyledImgWrapper = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 18px;
  background: #f6f6f6;
  margin-bottom: 18px;

  img {
    object-fit: contain;
    width: 100%;
    height: 213px;
    object-position: center center;
  }

  @media ${props => props.theme.media.tablet} {
    img {
      height: 284px;
    }
  }
`

const StyledTitle = styled.h3`
  ${dmSans.getBold()};
  ${getFontSize({size: 16, lineHeight: 18})};
  margin-bottom: 6px;
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 20, lineHeight: 24})};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${props => props.theme.buttonHoverBg};
    }
  }
`

const StyledSubtitle = styled.span`
  ${inter.getRegular()};
  ${getFontSize({size: 14, lineHeight: 18})};
  margin-bottom: 14px;
  color: ${props => props.theme.mainColor};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 16, lineHeight: 24})};
  }
`

const StyledPrice = styled.span`
  ${dmSans.getMedium()};
  ${getFontSize({size: 14, lineHeight: 20})};
  color: ${props => props.color || props.theme.secondaryColor};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 18, lineHeight: 24})};
  }
`