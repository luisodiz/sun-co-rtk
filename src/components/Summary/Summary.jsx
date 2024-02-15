import styled from 'styled-components'
import {dmSans, getFontSize} from '../styles/mixins'

export const Block = (props) => {
  return <StyledBlock {...props} />
}

export const Title = (props) => {
  return <StyledTitle {...props}/>
}

const Summary = (props) => {
  return (
    <StyledSummary {...props}/>
  )
}

export default Summary

const StyledBlock = styled.div`
  padding: 24px 20px;
  border-bottom: ${props => props.$noBorder ? 'none' : '1px solid #e9e9e9'};

  @media ${props => props.theme.media.desktop} {
    padding: 32px 36px;
  }
`

const StyledTitle = styled.h1`
  ${dmSans.getBold()};
  ${getFontSize({size: 28, lineHeight: 36})};
  margin-bottom: 4px;

  @media ${props => props.theme.media.desktop} {
    ${getFontSize({size: 36, lineHeight: 48})};
    margin-bottom: 0;
  }
`

const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3.33px 50px rgba(0, 0, 0, .08);
  border-radius: 15px;
  background: #fff;
`