import styled from 'styled-components'
import {inter, getFontSize} from '../styles/mixins'

export const StyledCountChanger = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  padding: 9px 12px;
  border: 1px solid #e9ebee;
  border-radius: 8px;

  button {
    width: 18px;
    height: 18px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  span {
    ${inter.getBold()};
    ${getFontSize({size: 14, lineHeight: 18})};
    padding: 0 12px;
    user-select: none;
  }

  @media ${props => props.theme.media.desktop} {
    padding: 12px 16px;

    button {
      width: 24px;
      height: 24px;

      &:hover {
        svg {
          path {
            fill: ${props => props.theme.mainColor};
          }
        }
      }
    }

    span {
      padding: 0 16px;
    }
  }
`