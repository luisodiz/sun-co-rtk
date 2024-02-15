import styled from 'styled-components'

const Container = (props) => {
  return (
    <StyledContainer {...props} />
  )
}

export default Container

const StyledContainer = styled.div`
  position: relative;
  max-width: 1146px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${props => props.theme.media.tablet} {
    padding: 0 22px;
  }
`