import styled from 'styled-components'
import {dmSans, inter, getFontSize} from '../styles/mixins'
import {Link} from 'react-router-dom'
import {StyledFlex} from '../Flex/StyledFlex'

export const StyledCardTitle = styled(Link)`
  ${dmSans.getBold()};
  ${getFontSize({size: 16, lineHeight: 18})};
  color: ${props => props.theme.secondaryColor};
  text-decoration: none;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 20, lineHeight: 24})};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${props => props.theme.buttonHoverBg};
    }
  }
`

export const StyledCardImage = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: 18px;
  background: #f6f6f6;

  img {
    object-fit: contain;
    width: 100%;
    height: 213px;
    object-position: center center;
  }

  @media ${({theme}) => theme.media.tablet} {
    img {
      height: 284px;
    }
  }
`

export const StyledCardDesc = styled.span`
  ${inter.getRegular()};
  ${getFontSize({size: 14, lineHeight: 18})};
  color: ${props => props.theme.mainColor};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 16, lineHeight: 24})};
  }
`

export const StyledCardPrice = styled.span`
  ${dmSans.getMedium()};
  ${getFontSize({size: 14, lineHeight: 20})};
  color: ${props => props.color || props.theme.secondaryColor};

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 18, lineHeight: 24})};
  }
`

export const StyledCard = styled.article`
  ${StyledFlex} {
    margin-top: 18px;
  }

  ${StyledCardTitle} {
    margin-bottom: 6px;
  }

  ${StyledCardDesc} {
    margin-bottom: 14px;
  }
`