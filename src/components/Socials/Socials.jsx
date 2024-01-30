import {SocialsStyled, SocialsItem} from '../styles/Socials.styled.js'
import InstagramIcon from '../../assets/img/instagram.svg'
import TwitterIcon from '../../assets/img/twitter.svg'
import YoutubeIcon from '../../assets/img/youtube.svg'

const Socials = () => {
  return (
    <SocialsStyled>
      <SocialsItem>
        <a href="#">
          <img src={InstagramIcon} alt="Instagram icon"/>
        </a>
      </SocialsItem>
      <SocialsItem>
        <a href="#">
          <img src={TwitterIcon} alt="Twitter icon"/>
        </a>
      </SocialsItem>
      <SocialsItem>
        <a href="#">
          <img src={YoutubeIcon} alt="Youtube icon"/>
        </a>
      </SocialsItem>
    </SocialsStyled>
  )
}

export default Socials