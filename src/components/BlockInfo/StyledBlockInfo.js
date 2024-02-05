import styled from 'styled-components'
import {dmSans, getFontSize} from '../styles/mixins'

export const StyledBlockInfo = styled.div`
  box-shadow: 0 3.33px 50px rgba(0, 0, 0, .08);
  border-radius: 15px;
  background: #fff;

  .end {
    padding: 32px 0 0;
  }
`

export const StyledBlockInfoTitle = styled.h2`
  padding: 32px 24px 4px;
  ${dmSans.getBold()};
  ${getFontSize({size: 28, lineHeight: 36})};

  @media ${props => props.theme.media.desktop} {
    padding: 36px 36px 0;
    ${getFontSize({size: 36, lineHeight: 48})};
  }
`

export const StyledBlockInfoItem = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e9e9e9;

  &:last-child {
    border-bottom: none;
  }

  @media ${props => props.theme.media.desktop} {
    padding: 32px 36px;
  }
`

export const StyledBlockInfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    & > span {
      ${dmSans.getMedium()};
      ${getFontSize({size: 16, lineHeight: 18})};
    }

    .total {
      ${dmSans.getBold()};
      ${getFontSize({size: 18, lineHeight: 24})};
    }
  }

  @media ${props => props.theme.media.desktop} {
    li {
      & > span {
        ${getFontSize({size: 20, lineHeight: 24})};
      }

      .total {
        ${getFontSize({size: 24, lineHeight: 32})};
      }
    }
  }
`