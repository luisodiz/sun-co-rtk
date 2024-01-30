import {SectionStyled} from '../styles/Section.styled.js'
import {ContainerStyled} from '../styles/Container.styled.js'
import {BannerStyled} from '../styles/Banner.styled.js'
import {ImageStyled} from '../styles/Image.styled.js'
import {ButtonIconStyled, ButtonStyled} from '../styles/Button.styled.js'
import BannerImg from '../../assets/img/banner.png'
import Arrow from '../../assets/img/arrow-right.svg?react'

const Banner = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <BannerStyled>
          <div className="banner-left">
            <span className="banner-sale">25% OFF</span>
            <h3 className="banner-title">Summer Sale</h3>
            <span className="banner-desc">Discover our summer styles with discount</span>
            <ButtonStyled>
              <span>Shop Now</span>
              <ButtonIconStyled as={Arrow}/>
            </ButtonStyled>
          </div>
          <div className="banner-right">
            <ImageStyled src={BannerImg} alt="Кроссовки Nike"/>
          </div>
        </BannerStyled>
      </ContainerStyled>
    </SectionStyled>
  )
}

export default Banner