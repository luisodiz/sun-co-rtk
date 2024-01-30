import {LogoStyled, LogoIconStyled} from '../styles/Logo.styled.js'

const Logo = ({version}) => {
  return (
    <LogoStyled version={version}>
      <LogoIconStyled />
      <span>SUN CO.</span>
    </LogoStyled>
  );
};

export default Logo;