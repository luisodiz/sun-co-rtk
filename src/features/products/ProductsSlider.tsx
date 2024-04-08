import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'

import Chevron from 'assets/img/chevron-right.svg?react'
import Card from 'features/products/Card'

import { selectProductsIds } from 'features/products/productsSlice'

import 'swiper/css'

const ProductsSlider = () => {
  const productsIds = useSelector(selectProductsIds)

  const renderedSlides = productsIds.map((productId) => (
    <SwiperSlide key={productId}>
      <Card productId={productId} />
    </SwiperSlide>
  ))

  return (
    <StyledProductsSlider>
      <Swiper spaceBetween={16} slidesPerView="auto">
        {renderedSlides}
        <Nav />
      </Swiper>
    </StyledProductsSlider>
  )
}

export default ProductsSlider

const StyledChevron = styled(Chevron)<{ readonly $isLeft?: boolean }>`
  width: 24px;
  height: 24px;
  transform: scaleX(${({ $isLeft }) => ($isLeft ? '-1' : 'none')});

  path {
    fill: ${({ theme }) => theme.secondaryColor};
  }
`

const StyledNav = styled.div`
  display: flex;
  padding: 0 15px;
  gap: 10px;
  margin-top: 24px;

  button {
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 4.44px 66px rgba(0, 0, 0, 0.08);

    &.disabled {
      pointer-events: none;
      background: #fbfbfb;

      ${StyledChevron} {
        path {
          fill: #636064;
        }
      }
    }
  }
`

const StyledProductsSlider = styled.div`
  .swiper {
    padding: 0 15px;
  }

  .swiper-slide {
    width: 60%;
  }

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`

const Nav = () => {
  const swiper = useSwiper()
  const [isPrevDisabled, setIsPrevDisabled] = useState(swiper.isBeginning)
  const [isNextDisabled, setIsNextDisabled] = useState(swiper.isEnd)

  const handleSlideChange = () => {
    setIsPrevDisabled(swiper.isBeginning)
    setIsNextDisabled(swiper.isEnd)
  }

  useEffect(() => {
    swiper.on('snapIndexChange', handleSlideChange)
    return () => swiper.off('snapIndexChange', handleSlideChange)
  }, [swiper])

  return (
    <StyledNav>
      <button
        className={isPrevDisabled ? 'disabled' : ''}
        onClick={() => swiper.slidePrev()}
      >
        <StyledChevron $isLeft />
      </button>
      <button
        className={isNextDisabled ? 'disabled' : ''}
        onClick={() => swiper.slideNext()}
      >
        <StyledChevron />
      </button>
    </StyledNav>
  )
}
