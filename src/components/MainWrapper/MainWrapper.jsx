import styled from 'styled-components'

const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`

const MainWrapper = (props) => {
  return (
    <StyledMainWrapper {...props} />
  )
}

export default MainWrapper