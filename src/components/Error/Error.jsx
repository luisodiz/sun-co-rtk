import styled from 'styled-components'
import {dmSans, getFontSize} from '../styles/mixins'
import {Link} from 'react-router-dom'

import Button from '../Button/Button'

const Error = ({hasButton, children}) => {
  return (
    <StyledError>
      {children}
      {hasButton ? <Button as={Link} to="/">Go to Home page</Button> : null}
    </StyledError>
  )
}

export default Error

const StyledError = styled.div`
  h2 {
    ${dmSans.getBold()};
    ${getFontSize({size: 24, lineHeight: 30})};
    margin-bottom: 4px;
  }

  p {
    ${dmSans.getMedium()};
    ${getFontSize({size: 16, lineHeight: 24})};
    margin: 0 0 20px;
  }
`