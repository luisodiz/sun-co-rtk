import styled from 'styled-components'

export const StyledFlex = styled.div`
  display: ${props => props.$display || 'flex'};
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'flex-start'};
  align-items: ${props => props.$align || 'center'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`