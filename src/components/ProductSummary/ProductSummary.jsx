import styled from 'styled-components'
import {dmSans, inter, getFontSize} from '../styles/mixins'

import Summary, {
  Block,
  Title,
} from '../Summary/Summary'
import CountChanger from '../CountChanger/CountChanger'
import Button from '../Button/Button'

const ProductSummary = () => {
  return (
    <StyledSummary>
      <Block>
        <StyledTitle>adidas</StyledTitle>
        <StyledSubtitle>DAILY 3.0 SHOES</StyledSubtitle>
        <StyledPrice>$98.99</StyledPrice>
      </Block>
      <Block $noBorder>
        <StyledCountChangerTitle>Quantity</StyledCountChangerTitle>
        <CountChanger/>
      </Block>
      <StyledButtonWrapper>
        <Button isLarge>Add to Cart</Button>
      </StyledButtonWrapper>
    </StyledSummary>
  )
}

export default ProductSummary

const StyledTitle = styled(Title)`
  ${dmSans.getBold()};
  ${getFontSize({size: 18, lineHeight: 24})};
  margin-bottom: 6px;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 24, lineHeight: 32})};
    margin-bottom: 8px;
  }
`

const StyledSubtitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 13px;
  ${inter.getRegular()};
  color: ${props => props.theme.mainColor};
  ${getFontSize({size: 15, lineHeight: 18})};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 20, lineHeight: 24})};
    margin-bottom: 18px;
  }
`

const StyledPrice = styled.span`
  ${dmSans.getMedium()};
  ${getFontSize({size: 18, lineHeight: 18})};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 24, lineHeight: 24})};
  }
`

const StyledCountChangerTitle = styled.p`
  ${dmSans.getBold()};
  ${getFontSize({size: 14, lineHeight: 15})};
  margin: 0 0 12px;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 18, lineHeight: 20})};
  }
`

const StyledButtonWrapper = styled.div`
  padding: 0 24px 24px;
  margin-top: auto;

  @media ${props => props.theme.media.desktop} {
    padding: 0 36px 36px;
  }
`

const StyledSummary = styled(Summary)`
  @media ${props => props.theme.media.desktop} {
    height: 100%;
  }
`