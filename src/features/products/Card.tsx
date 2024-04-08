import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { dmSans, getFontSize, inter } from 'components/styles/mixins'
import { useAppSelector } from 'app/hooks'
import { selectProductById } from 'features/products/productsSlice'

import Flex from 'components/Flex/Flex'

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 18px;
  background: #f6f6f6;
  margin-bottom: 18px;

  img {
    object-fit: contain;
    width: 85%;
    height: 213px;
    object-position: center center;
  }

  @media ${(props) => props.theme.media.tablet} {
    img {
      height: 284px;
    }
  }
`

export const Title = styled.h3`
  ${dmSans.getBold()};
  ${getFontSize({ size: 16, lineHeight: 18 })};
  margin-bottom: 6px;
  color: ${(props) => props.theme.secondaryColor};
  text-decoration: none;

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 20, lineHeight: 24 })};

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${(props) => props.theme.buttonHoverBg};
    }
  }
`

export const Subtitle = styled.span`
  ${inter.getRegular()};
  ${getFontSize({ size: 14, lineHeight: 18 })};
  margin-bottom: 14px;
  color: ${(props) => props.theme.mainColor};

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 16, lineHeight: 24 })};
  }
`

interface PriceProps {
  className?: string
  color?: string
}

export const Price = styled.span<PriceProps>`
  ${dmSans.getMedium()};
  ${getFontSize({ size: 14, lineHeight: 20 })};
  color: ${(props) => props.color || props.theme.secondaryColor};

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 18, lineHeight: 24 })};
  }
`

interface CardProps {
  productId: string
}

const Card: React.FC<CardProps> = ({ productId }) => {
  const product = useAppSelector((state) => selectProductById(state, productId))
  const { id, preview, title, description, price } = product

  return (
    <article>
      <ImgWrapper as={Link} to={`/products/${id}`}>
        <img src={preview} alt={title} />
      </ImgWrapper>
      <Flex $direction="column" $align="flex-start">
        <Title as={Link} to={`/products/${id}`}>
          {title}
        </Title>
        <Subtitle>{description}</Subtitle>
        <Price>${price}</Price>
      </Flex>
    </article>
  )
}

export default Card
