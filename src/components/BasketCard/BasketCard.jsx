import styled from 'styled-components'
import {inter, getFontSize} from '../styles/mixins'

import Flex from '../Flex/Flex'
import {ImgWrapper, Title, Subtitle, Price} from '../Card/Card'
import CountChanger from '../CountChanger/CountChanger'

const BasketCard = ({title, preview, description, price}) => {
  return (
    <StyledBasketCard>
      <StyledImgWrapper>
        <img src={preview} alt=""/>
      </StyledImgWrapper>
      <StyledFlex
        $direction="column"
        width="100%"
      >
        <StyledFlex
          $justify="space-between"
          $align="flex-start"
          className="titleWrapper"
        >
          <div>
            <StyledTitle>{title}</StyledTitle>
            <Subtitle>{description}</Subtitle>
          </div>
          <StyledPrice>${price}</StyledPrice>
        </StyledFlex>
        <StyledFlex
          $direction="column"
          $align="flex-start"
          className="counterWrapper"
        >
          <StyledCountChanger/>
          <button className="remove">Remove</button>
        </StyledFlex>
      </StyledFlex>
    </StyledBasketCard>
  )
}

export default BasketCard

const StyledFlex = styled(Flex)`
  &.titleWrapper {
    margin-bottom: 20px;
  }

  &.counterWrapper {
    margin-top: auto;
  }

  @media ${props => props.theme.media.desktop} {
    &.titleWrapper {
      margin-bottom: 64px;
    }

    &.counterWrapper {
      flex-direction: row;
      align-items: center;
    }
  }
`

const StyledImgWrapper = styled(ImgWrapper)`
  align-self: flex-start;
  width: 140px;
  flex-shrink: 0;
  margin-bottom: 0;
  margin-right: 20px;

  img {
    height: 141px;
  }

  @media ${props => props.theme.media.desktop} {
    width: 165px;
    margin-right: 32px;

    img {
      height: 169px;
    }
  }
`

const StyledTitle = styled(Title)`
  margin-bottom: 8px;

  &:hover {
    color: ${props => props.theme.secondaryColor};
  }

  @media ${props => props.theme.media.desktop} {
    margin-bottom: 6px;
  }
`

const StyledPrice = styled(Price)`
  margin-left: auto;
`

const StyledCountChanger = styled(CountChanger)`
  margin-bottom: 16px;

  @media ${props => props.theme.media.desktop} {
    margin-bottom: 0;
  }
`

const StyledBasketCard = styled.article`
  display: flex;
  padding-bottom: 25px;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 25px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  .remove {
    padding: 0;
    background: none;
    border: none;
    ${inter.getBold()};
    ${getFontSize({size: 14, lineHeight: 20})};
    text-decoration: underline;
    color: ${props => props.theme.mainColor};
    cursor: pointer;
    user-select: none;
  }

  @media ${props => props.theme.media.desktop} {
    .remove {
      ${getFontSize({size: 16, lineHeight: 24})};
      margin-left: 30px;
    }
  }
`

