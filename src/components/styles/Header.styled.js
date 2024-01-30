import styled from 'styled-components'
import {ContainerStyled} from './Container.styled.js'

export const HeaderStyled = styled.header`
  padding: 12px 0;
  border-bottom: 1px solid #e9ebee;

  ${ContainerStyled} {
    display: flex;
    justify-content: space-between;
  }
`
