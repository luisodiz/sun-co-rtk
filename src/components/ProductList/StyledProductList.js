import styled from 'styled-components'
import {StyledRow} from '../Row/StyledRow'
import {StyledCol} from '../Col/StyledCol'

export const StyledProductList = styled.div`
  ${StyledRow} {
    margin: 0 -12px -24px;
  }

  ${StyledCol} {
    width: 100%;
    flex: 0 0 100%;
    padding: 0 12px;
    margin-bottom: 24px;
  }


  @media ${props => props.theme.media.tablet} {
    ${StyledCol} {
      width: 50%;
      flex: 0 0 50%;
    }
  }

  @media ${props => props.theme.media.desktop} {
    ${StyledCol} {
      width: 25%;
      flex: 0 0 25%;
    }
  }
`