import styled from 'styled-components'
import {dmSans, inter, getFontSize} from '../styles/mixins'
import {Link} from 'react-router-dom'

const StyledLinkWithImage = styled(Link)`
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

  @media ${({theme}) => theme.media.tablet} {
    img {
      height: 284px;
    }
  }
`

const StyledLinkTitle = styled(Link)`
  display: block;
  ${dmSans.getBold()};
  ${getFontSize({size: 16, lineHeight: 18})};
  text-decoration: none;
  color: ${({theme}) => theme.secondaryColor};
  margin-bottom: 6px;

  @media ${({theme}) => theme.media.desktop} {
    ${getFontSize({size: 20, lineHeight: 24})};
  }
`

const StyledCard = styled.article`
  .info {
    p {
      ${inter.getRegular()};
      ${getFontSize({size: 14, lineHeight: 18})};
      color: ${({theme}) => theme.mainColor};
      margin: 0 0 14px 0;
    }

    span {
      ${dmSans.getMedium()};
      ${getFontSize({size: 16, lineHeight: 20})};
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    .info {
      p {
        ${getFontSize({size: 16, lineHeight: 20})};
      }
    }
  }
`

const Card = ({id, img, title, description, price, ...props}) => {
  return (
    <StyledCard {...props}>
      <StyledLinkWithImage to={`products/${id}`}>
        <img src={img} alt="Nike"/>
      </StyledLinkWithImage>
      <div className="info">
        <StyledLinkTitle to={`products/${id}`}>{title}</StyledLinkTitle>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </StyledCard>
  )
}

export default Card