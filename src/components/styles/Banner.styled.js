import styled from 'styled-components'
import {inter, dmSans, getFontSize} from './mixins.js'
import {ButtonStyled} from './Button.styled.js'

export const BannerStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #eaeeef;
  border-radius: 40px;
  padding: 53px 64px;

  .banner-sale {
    display: block;
    margin-bottom: 8px;
    ${dmSans.getBold()}
    ${getFontSize({size: 48, lineHeight: 56})}
    color: #ec5e2a;
  }

  .banner-title {
    margin-top: 0;
    margin-bottom: 20px;
    ${dmSans.getBold()}
    ${getFontSize({size: 64, lineHeight: 73})}
    color: ${({theme}) => theme.secondaryColor};;
  }

  .banner-desc {
    display: block;
    ${inter.getRegular()}
    ${getFontSize({size: 20, lineHeight: 30})}
    color: ${({theme}) => theme.mainColor};
    margin-bottom: 48px;
  }

  ${ButtonStyled} {
    padding: 22px 80px;
    ${getFontSize({size: 18, lineHeight: 20})}
  }
`