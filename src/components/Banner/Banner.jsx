import styled from 'styled-components'
import {inter, dmSans, getFontSize} from '../styles/mixins'
import Section from '../Section/Section'
import ButtonLarge from '../Button/ButtonLarge'
import Arrow from '../../assets/img/arrow-right.svg?react'
import Container from '../Container/Container'

const StyledSection = styled(Section)`
  padding-top: 0;
`

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  background: #eaeeef;
  border-radius: 40px;
  padding: 32px 24px 40px;

  .banner-right {
    order: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .banner-left {
    order: 1;
    text-align: center;
  }

  .banner-sale {
    display: block;
    ${dmSans.getBold()};
    ${getFontSize({size: 36, lineHeight: 42})};
    color: #ec5e2a;
  }

  .banner-title {
    margin-bottom: 20px;
    ${dmSans.getBold()};
    ${getFontSize({size: 48, lineHeight: 54})};
    color: ${({theme}) => theme.secondaryColor};
  }

  .banner-desc {
    display: block;
    ${inter.getRegular()};
    ${getFontSize({size: 14, lineHeight: 20})};
    color: ${({theme}) => theme.mainColor};
    margin-bottom: 36px;
  }

  img {
    height: 140px;
  }

  @media ${({theme}) => theme.media.tablet} {
    .button {
      max-width: 283px;
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 53px 64px;

    .banner-right {
      order: 1;
      margin-bottom: 0;
    }

    .banner-left {
      order: 0;
      text-align: left;
    }

    .banner-sale {
      ${getFontSize({size: 48, lineHeight: 56})};
      margin-bottom: 8px;
    }

    .banner-title {
      ${getFontSize({size: 64, lineHeight: 73})};
    }

    .banner-desc {
      ${getFontSize({size: 20, lineHeight: 30})};
      margin-bottom: 48px;
    }

    img {
      height: 321px;
    }
  }
`

const Banner = () => {
  return (
    <StyledSection>
      <Container>
        <StyledBanner>
          <div className="banner-left">
            <span className="banner-sale">25% OFF</span>
            <h3 className="banner-title">Summer Sale</h3>
            <span
              className="banner-desc">Discover our summer styles with discount</span>
            <ButtonLarge $hasIcon className="button">
              <span>Shop Now</span>
              <Arrow/>
            </ButtonLarge>
          </div>
          <div className="banner-right">
            <img src="./img/banner.png" alt="Кроссовки Nike"/>
          </div>
        </StyledBanner>
      </Container>
    </StyledSection>
  )
}

export default Banner