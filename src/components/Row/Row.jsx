import styled from 'styled-components'

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  padding: 0 3px;
`

const Row = (props) => {
  return (
    <StyledRow {...props} />
  )
}

export default Row