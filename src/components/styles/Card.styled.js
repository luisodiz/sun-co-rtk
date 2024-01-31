import styled from 'styled-components'
import {ImageStyled} from './Image.styled.js'
import {dmSans, getFontSize, inter} from './mixins.js'

export const CardStyled = styled.article`
  a {
    display: block;
    overflow: hidden;
    border-radius: 18px;
    background: #f6f6f6;
    margin-bottom: 18px;
  }
  
  ${ImageStyled} {
    object-fit: contain;
    width: 100%;
    height: 213px;
    object-position: center center;
  }
  
  @media (min-width: ${({theme}) => theme.media.tablet}) {
    ${ImageStyled} {
      height: 284px;
    }
  }
`

export const CardInfoStyled = styled.div`
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
  
  @media (min-width: ${({theme}) => theme.media.desktop}) {
    h3 {
      ${getFontSize({size: 20, lineHeight: 24})};
    }

    p {
      ${getFontSize({size: 16, lineHeight: 20})};
    }
  }
`