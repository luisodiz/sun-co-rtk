import styled from 'styled-components'
import {RowStyled} from './Row.styled.js'
import {ColStyled} from './Col.styled.js'

export const ProductListStyled = styled.div`
  ${ColStyled} {
    flex: 0 0 100%;
    margin-bottom: 24px;
  }
  
  @media (min-width: ${({theme}) => theme.media.mobile}) {
    ${ColStyled} {
      flex: 0 0 50%;
    }
  }

  @media (min-width: ${({theme}) => theme.media.tablet}) {
    ${ColStyled} {
      flex: 0 0 33.3%;
    }
  }

  @media (min-width: ${({theme}) => theme.media.desktop}) {
    ${ColStyled} {
      flex: 0 0 25%;
    }
  }
`