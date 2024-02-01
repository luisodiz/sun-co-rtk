import styled from 'styled-components'
import {dmSans, getFontSize} from '../styles/mixins'

const StyledSection = styled.section`
  padding: 24px 0;
  
  h2 {
    ${dmSans.getBold()};
    ${getFontSize({size: 28, lineHeight: 36})};
    color: ${({theme}) => theme.secondaryColor};
    margin-bottom: 24px;
  }
  
  @media ${({theme}) => theme.media.desktop} {
    padding: 32px 0;
    
    h2 {
      margin-bottom: 32px;
      ${getFontSize({size: 36, lineHeight: 48})};
    }
  }
`

const Section = (props) => {
  return (
    <StyledSection {...props}/>
  )
}

export default Section