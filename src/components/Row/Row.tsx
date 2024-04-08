import styled from 'styled-components'

interface RowProps {
  props: any[]
}

const Row = (props: RowProps) => {
  return <StyledRow {...props} />
}

export default Row

const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  @media ${(props) => props.theme.media.tablet} {
    margin: 0 -22px;
  }
`
