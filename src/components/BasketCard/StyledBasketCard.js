import styled from 'styled-components'
import {StyledFlex} from '../Flex/StyledFlex'
import {StyledCardImage, StyledCardTitle} from '../Card/StyledCard'
import {StyledCountChanger} from '../CountChanger/StyledCountChanger'
import {getFontSize, inter} from '../styles/mixins'

export const StyledRemoveButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  ${inter.getBold()};
  ${getFontSize({size: 14, lineHeight: 20})};
  color: ${props => props.theme.mainColor};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 16, lineHeight: 24})};

    &:hover {
      text-decoration: none;
    }
  }
`

export const StyledBasketCard = styled.article`
  display: flex;
  padding-bottom: 25px;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 25px;

  ${StyledCardImage} {
    margin-right: 20px;

    img {
      height: 141px;
    }

    & + div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      height: 100%;
    }
  }

  ${StyledCardTitle} {
    margin-bottom: 8px;
  }

  ${StyledFlex} {
    &.title-wrapper {
      margin-bottom: 22px;
    }
  }

  .counter-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  ${StyledCountChanger} {
    margin-bottom: 16px;
  }

  ${StyledRemoveButton} {
    margin-top: auto;
    margin-left: 0;
  }

  @media ${props => props.theme.media.desktop} {
    margin-bottom: 32px;
    padding-bottom: 32px;

    ${StyledCardImage} {
      margin-right: 32px;

      img {
        height: 169px;
      }
    }

    ${StyledCardTitle} {
      margin-bottom: 6px;

      &:hover {
        color: ${props => props.theme.secondaryColor};
      }
    }

    ${StyledCountChanger} {
      margin-bottom: 0;
    }

    .counter-wrapper {
      flex-direction: row;
      align-items: center;
    }

    ${StyledRemoveButton} {
      margin-top: 0;
      margin-left: 30px;
    }
  }
`