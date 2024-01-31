import styled from 'styled-components'
import {dmSans, getFontSize} from './mixins.js'

export const SectionStyled = styled.section`
  padding: 24px 0; 
  
  @media (min-width: ${({theme}) => theme.media.desktop}) {
    padding: 32px 0;
  }
`

export const SectionTitleStyled = styled.h2`
  ${dmSans.getBold()}
  ${getFontSize({size: 28, lineHeight: 36})};
  margin-bottom: 24px;

  @media (min-width: ${({theme}) => theme.media.desktop}) {
    margin-bottom: 32px;
    ${getFontSize({size: 36, lineHeight: 48})};  
  }
`