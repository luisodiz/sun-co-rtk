import styled from 'styled-components'
import {
  StyledBlockInfo,
  StyledBlockInfoItem
} from '../BlockInfo/StyledBlockInfo'
import {StyledCardDesc, StyledCardPrice} from '../Card/StyledCard'
import {StyledButtonLarge} from '../Button/StyledButton'
import {dmSans, getFontSize, inter} from '../styles/mixins'

export const StyledAddToCart = styled(StyledBlockInfo)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 24px;

  ${StyledBlockInfoItem} {
    &:last-child {
      flex-grow: 1;
    }
  }

  h1 {
    ${dmSans.getBold()};
    ${getFontSize({size: 18, lineHeight: 24})};
    margin-bottom: 6px;
  }

  ${StyledCardDesc} {
    display: block;
    margin-bottom: 13px;
  }

  ${StyledCardPrice} {
    ${getFontSize({size: 18, lineHeight: 18})};
  }

  .quantity-title {
    display: block;
    ${dmSans.getBold()};
    ${getFontSize({size: 14, lineHeight: 15})};
    margin-bottom: 12px;
  }

  ${StyledButtonLarge} {
    margin-top: auto;
  }

  @media ${props => props.theme.media.desktop} {
    margin-top: 0;
  }
`