import styled from 'styled-components'
import {dmSans, inter, getFontSize} from '../styles/mixins'

const StyledCard = styled.article`
  a {
    display: block;
    overflow: hidden;
    border-radius: 18px;
    background: #f6f6f6;
    margin-bottom: 18px;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 213px;
    object-position: center center;
  }

  .info {
    h3 {
      ${dmSans.getBold()};
      ${getFontSize({size: 16, lineHeight: 18})};
      margin-bottom: 6px;
    }

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

  @media ${({theme}) => theme.media.tablet} {
    img {
      height: 284px;
    }
  }
  
  @media ${({theme}) => theme.media.desktop} {
    .info {
      h3 {
        ${getFontSize({size: 20, lineHeight: 24})};
      }

      p {
        ${getFontSize({size: 16, lineHeight: 20})};
      }
    }
  }
`

const Card = ({img, title, description, price, ...props}) => {
  return (
    <StyledCard {...props}>
      <a href="#">
        <img src={img} alt="Nike"/>
      </a>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </StyledCard>
  )
}

export default Card