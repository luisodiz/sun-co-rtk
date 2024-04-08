import styled from 'styled-components'

interface FlexProps {
  $display?: string
  $direction?: string
  $justify?: string
  $align?: string
  width?: string
  height?: string
}

const Flex = styled.div<FlexProps>`
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`

export default Flex
