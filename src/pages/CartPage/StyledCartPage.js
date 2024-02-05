import styled from 'styled-components'
import {StyledContainer} from '../../components/Container/StyledContainer'
import {StyledBlockInfo} from '../../components/BlockInfo/StyledBlockInfo'
import {StyledRow} from '../../components/Row/StyledRow'
import {StyledCol} from '../../components/Col/StyledCol'

export const StyledCartPage = styled(StyledContainer)`
  ${StyledCol} {
    width: 100%;
    flex: 0 0 100%;

    &.your-bag {
      order: 1;
    }

    &.your-summary {
      order: 0;
    }
  }

  ${StyledBlockInfo} {
    margin-bottom: 48px;
  }

  @media ${props => props.theme.media.desktop} {
    ${StyledRow} {
      margin: 0 -35px;
    }

    ${StyledCol} {
      width: 50%;
      flex: 0 0 50%;
      padding: 0 35px;

      &.your-bag {
        order: 0;
      }

      &.your-summary {
        order: 1;
      }
    }

    ${StyledBlockInfo} {
      margin-bottom: 0;
    }
  }
`