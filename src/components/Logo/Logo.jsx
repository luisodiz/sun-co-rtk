import Icon from '../../assets/img/logo-icon.svg?react';
import styled from 'styled-components';

const LogoImage = styled(Icon)`
  width: 24px;
  height: 23px;
  flex-shrink: 0;
  
  path {
    fill: #a7c6ba;
  }
`

const LogoStyled = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  
  span {
    margin-left: 9px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: ${({$mod}) => $mod === 'dark' ? '#201b21' : '#fff'};
  }
`

const Logo = () => {
  return (
    <LogoStyled href="#" $mod="dark">
      <LogoImage/>
      <span>SUN CO.</span>
    </LogoStyled>
  );
};

export default Logo;