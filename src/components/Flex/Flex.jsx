import styled from 'styled-components'

const Flex = styled.div`
  display: ${props => props.$display || 'flex'};
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'flex-start'};
  align-items: ${props => props.$align || 'stretch'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`

export default Flex