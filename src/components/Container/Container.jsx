import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  max-width: 1146px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

const Container = (props) => {
  return (
    <StyledContainer {...props} />
  )
}

export default Container