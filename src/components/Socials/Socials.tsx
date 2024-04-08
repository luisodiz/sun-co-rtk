import styled from 'styled-components'
// @ts-expect-error ts-ignore
import InstagramIcon from 'assets/img/instagram.svg'
// @ts-expect-error ts-ignore
import TwitterIcon from 'assets/img/twitter.svg'
// @ts-expect-error ts-ignore
import YoutubeIcon from 'assets/img/youtube.svg'

const StyledSocials = styled.ul`
  list-style: none;
  display: inline-flex;
  margin: 0;
  padding: 0;

  li {
    flex-shrink: 0;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 5.6px;
    border-radius: 50%;
    background: #363137;
    transition: background 0.2s;
  }

  @media ${({ theme }) => theme.media.desktop} {
    a {
      &:hover {
        background: #ec5e2a;
      }
    }
  }
`

const Socials = (props) => {
  return (
    <StyledSocials {...props}>
      <li>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={InstagramIcon} alt="Instagram icon" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src={TwitterIcon} alt="Twitter icon" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={YoutubeIcon} alt="Youtube icon" />
        </a>
      </li>
    </StyledSocials>
  )
}

export default Socials
