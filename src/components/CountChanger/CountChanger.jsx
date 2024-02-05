import {useState} from 'react'

import {StyledCountChanger} from './StyledCountChanger'
import Minus from '../../assets/img/minus.svg?react'
import Plus from '../../assets/img/plus.svg?react'

const CountChanger = () => {
  const [count, setCount] = useState(1)

  return (
    <StyledCountChanger>
      <button onClick={() => setCount(count - 1)}>
        <Minus/>
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        <Plus/>
      </button>
    </StyledCountChanger>
  )
}

export default CountChanger