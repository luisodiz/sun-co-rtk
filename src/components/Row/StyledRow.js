import styled from 'styled-components'

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  @media ${props => props.theme.media.tablet} {
    margin: 0 -22px;
  }
`