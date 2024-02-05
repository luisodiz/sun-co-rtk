import styled from 'styled-components'
import {StyledButton} from '../Button/StyledButton'
import {getFontSize} from '../styles/mixins'

export const StyledViewCart = styled(StyledButton)`
  background: transparent;
  border: 1px solid ${({theme}) => theme.primaryColor};
  color: ${({theme}) => theme.secondaryColor};

  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 16px;
    margin-left: 8px;
    height: 16px;
    color: #fff;
    ${getFontSize({size: 11, lineHeight: 18})};
    background: #ec5e2a;
    border-radius: 10px;
    padding: 0 4.5px;
    transition: background .22s, transform .2s ease-in;
  }

  svg {
    width: 13px;
    height: 16px;
    margin-right: 10px;
    transition: .2s;

    path {
      fill: ${({theme}) => theme.secondaryColor};
      transition: .2s;
    }
  }

  @media ${({theme}) => theme.media.desktop} {
    &:hover,
    &:focus {
      color: #fff;
      background: #ec5e2a;
      border-color: #ec5e2a;

      svg {
        path {
          fill: #fff;
        }
      }

      span {
        background: ${({theme}) => theme.secondaryColor};
        transform: scale(.8);
      }
    }

    svg {
      width: 16px;
      height: 24px;
    }
  }
`