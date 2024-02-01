import styled from 'styled-components'

const StyledCol = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 12px;
`

const Col = (props) => {
  return (
    <StyledCol {...props} />
  )
}

export default Col