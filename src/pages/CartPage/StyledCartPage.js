import styled from 'styled-components'
import {StyledContainer} from '../../components/Container/StyledContainer'
import {StyledCol} from '../../components/Col/StyledCol'

export const StyledCartPage = styled(StyledContainer)`
  ${StyledCol} {
    width: 100%;
    flex: 0 0 100%;
  }

  @media ${props => props.theme.media.desktop} {
    ${StyledCol} {
      width: 50%;
      flex: 0 0 50%;
    }
  }
`