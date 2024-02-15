import styled from 'styled-components'
import {dmSans, getFontSize} from '../styles/mixins'

const PageTitle = (props) => {
  return (
    <StyledPageTitle {...props}/>
  )
}

export default PageTitle

const StyledPageTitle = styled.h1`
  ${dmSans.getBold()};
  ${getFontSize({size: 28, lineHeight: 36})};
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 24px;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 36, lineHeight: 48})};
    margin-bottom: 28px;
  }
`