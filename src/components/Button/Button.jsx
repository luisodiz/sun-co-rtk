import {StyledButton, StyledButtonLarge} from './StyledButton'

const Button = ({large, props}) => {
  if (large) {
    return <StyledButtonLarge {...props}/>
  }
  return (
    <StyledButton {...props} />
  )
}

export default Button