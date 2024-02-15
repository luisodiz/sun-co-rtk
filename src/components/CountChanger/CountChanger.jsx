import {useReducer} from 'react'
import styled from 'styled-components'
import {getFontSize, inter} from '../styles/mixins'

import Minus from '../../assets/img/minus.svg?react'
import Plus from '../../assets/img/plus.svg?react'

const countReducer = (state, {type}) => {
  switch (type) {
    case 'decrementCount': {
      return state - 1
    }
    case 'incrementCount': {
      return state + 1
    }
    default:
      return state
  }
}

const CountChanger = (props) => {
  const [count, dispatch] = useReducer(countReducer, 1)

  return (
    <StyledCountChanger {...props}>
      <button
        className={count === 1 ? 'disabled' : ''}
        onClick={() => {
          if (count === 1) {
            return
          }
          dispatch({type: 'decrementCount'})
        }}>
        <Minus/>
      </button>
      <span>{count}</span>
      <button onClick={() => dispatch({type: 'incrementCount'})}>
        <Plus/>
      </button>
    </StyledCountChanger>
  )
}

export default CountChanger

const StyledCountChanger = styled.div`
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

    &.disabled {
      svg path {
        fill: #e9ebee;
      }
    }

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

      &:hover:not(.disabled) {
        svg path {
          fill: ${props => props.theme.mainColor};
        }
      }
    }

    span {
      padding: 0 16px;
    }
  }
`