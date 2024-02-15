import styled from 'styled-components'

const Row = (props) => {
  return (
    <StyledRow {...props} />
  )
}

export default Row

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  @media ${props => props.theme.media.tablet} {
    margin: 0 -22px;
  }
`