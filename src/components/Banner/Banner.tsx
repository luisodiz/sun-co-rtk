import styled from 'styled-components'
import { inter, dmSans, getFontSize } from 'components/styles/mixins'
import { Link } from 'react-router-dom'

import Section from 'components/Section/Section'
import Arrow from 'assets/img/arrow-right.svg?react'
import Button from 'components/Button/Button.js'
import Container from 'components/Container/Container'
import Flex from 'components/Flex/Flex'

const Banner = () => {
  return (
    <StyledSection>
      <Container>
        <StyledBanner>
          <StyledLeftColumn>
            <StyledSale>25% OFF</StyledSale>
            <StyledTitle>Summer Sale</StyledTitle>
            <StyledDesc>Discover our summer styles with discount</StyledDesc>
            <Button as={StyledButton} to="/products" $isLarge>
              Shop Now
              <Arrow className="icon" />
            </Button>
          </StyledLeftColumn>
          <StyledRightColumn>
            <StyledImg src="/img/banner.png" alt="" />
          </StyledRightColumn>
        </StyledBanner>
      </Container>
    </StyledSection>
  )
}

export default Banner

const StyledSection = styled(Section)`
  padding-top: 0;
`

const StyledBanner = styled(Flex)`
  background: #eaeeef;
  border-radius: 40px;
  padding: 32px 24px 40px;
  flex-direction: column;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 53px 64px;
  }
`

const StyledLeftColumn = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.media.desktop} {
    width: 50%;
    order: 0;
    align-items: flex-start;
  }
`

const StyledRightColumn = styled.div`
  width: 100%;
  order: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media ${(props) => props.theme.media.desktop} {
    width: 50%;
    order: 1;
    margin-bottom: 0;
  }
`

const StyledSale = styled.p`
  margin: 0;
  ${dmSans.getBold()};
  ${getFontSize({ size: 36, lineHeight: 42 })};
  color: #ec5e2a;

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 48, lineHeight: 56 })};
    margin-bottom: 8px;
  }
`

const StyledTitle = styled.h3`
  margin-bottom: 20px;
  ${dmSans.getBold()};
  ${getFontSize({ size: 48, lineHeight: 54 })};
  color: ${(props) => props.theme.secondaryColor};

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 64, lineHeight: 73 })};
  }
`

const StyledDesc = styled.p`
  ${inter.getRegular()};
  ${getFontSize({ size: 14, lineHeight: 20 })};
  color: ${(props) => props.theme.mainColor};
  margin: 0 0 36px;

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 20, lineHeight: 30 })};
    margin-bottom: 48px;
  }
`

const StyledButton = styled(Link)`
  @media ${(props) => props.theme.media.tablet} {
    max-width: 283px;
  }
`

const StyledImg = styled.img`
  height: 140px;

  @media ${(props) => props.theme.media.desktop} {
    height: 321px;
  }
`
