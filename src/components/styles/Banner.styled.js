import styled from 'styled-components'
import {inter, dmSans, getFontSize} from './mixins.js'
import {ButtonStyled} from './Button.styled.js'
import {ImageStyled} from './Image.styled.js'

export const BannerStyled = styled.div`
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

  ${ImageStyled} {
    height: 140px;
  }

  ${ButtonStyled} {
    max-width: 283px;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    ${ButtonStyled} {
      max-width: 100%;
    }
  }

  @media (min-width: ${({theme}) => theme.media.desktop}) {
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

    ${ImageStyled} {
      height: 321px;
    }
  }
`