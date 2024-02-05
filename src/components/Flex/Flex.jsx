import {StyledFlex} from './StyledFlex'

const Flex = ({children, ...props}) => {
  return (
    <StyledFlex {...props}>
      {children}
    </StyledFlex>
  )
}

export default Flex