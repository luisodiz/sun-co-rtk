import {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import Chevron from '../../assets/img/chevron-right.svg?react'
import 'swiper/css'
import 'swiper/css/pagination'

const NavButton = styled.button`
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4.44px 66px rgba(0, 0, 0, .08);
  position: absolute;
  z-index: 11;
  ${props => {
    if (props.$isPrev) {
      return css`
        left: 0;
        top: 0;
      `
    } else {
      return css`
        right: 0;
        top: 0;
      `
    }
  }};

  &.disabled {
    pointer-events: none;
    background: #fbfbfb;

    svg {
      path {
        fill: #636064;
      }
    }
  }

  svg {
    transform: ${({$isPrev}) => $isPrev ? 'scaleX(-1)' : ''};
    fill: ${({theme}) => theme.secondaryColor};
  }
`

const SliderNavigation = () => {
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
    <>
      <NavButton
        $isPrev
        className={isPrevDisabled ? 'disabled' : ''}
        onClick={() => swiper.slidePrev()}
      >
        <Chevron/>
      </NavButton>
      <NavButton
        className={isNextDisabled ? 'disabled' : ''}
        onClick={() => swiper.slideNext()}
      >
        <Chevron/>
      </NavButton>
    </>
  )
}

const StyledDetailsSlider = styled(Swiper)`
  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f6f6;
    overflow: hidden;
    border-radius: 20px;

    img {
      height: 240px;
      object-fit: contain;
      object-position: center center;
    }
  }

  .container-end {
    position: relative;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background: rgba(0, 0, 0, .08);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 12px;
    height: 12px;
    background: ${({theme}) => theme.secondaryColor};
  }

  @media ${({theme}) => theme.media.desktop} {
    .img-wrapper {
      img {
        height: 375px;
      }
    }

    .container-end {
      margin-top: 28px;
    }
  }
`

const DetailsSlider = ({product}) => {
  const images = product.details.images

  return (
    <StyledDetailsSlider
      spaceBetween={16}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true
      }}
    >
      {
        images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="img-wrapper">
              <img src={item} alt=""/>
            </div>
          </SwiperSlide>
        ))
      }
      <span slot="container-end" className="container-end">
        <SliderNavigation/>
      </span>
    </StyledDetailsSlider>
  )
}

export default DetailsSlider