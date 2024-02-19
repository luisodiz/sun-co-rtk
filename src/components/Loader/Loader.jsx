import styled, {keyframes} from 'styled-components'
import Flex from '../Flex/Flex'

const Loader = () => {
  return (
    <StyledLoader
      $justify="center"
    >
      <span></span>
    </StyledLoader>
  )
}

export default Loader

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const prixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`

const StyledLoader = styled(Flex)`
  span {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: ${rotate} 1s linear infinite
  }

  span::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.secondaryColor};
    animation: ${prixClipFix} 2s linear infinite;
  }
`