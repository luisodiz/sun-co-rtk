import {StyledBlockInfo} from './StyledBlockInfo'

const BlockInfo = ({children, ...props}) => {
  return (
    <StyledBlockInfo {...props}>
      {children}
    </StyledBlockInfo>
  )
}

export default BlockInfo