import styled from 'styled-components'

const Col = (props) => {
  return (
    <StyledCol {...props} />
  )
}

export default Col

const StyledCol = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 20px;

  @media ${props => props.theme.media.tablet} {
    padding: 0 22px;
  }
`