import styled from 'styled-components'
import {dmSans, getFontSize} from './mixins.js'

export const SectionStyled = styled.section`
  padding: 32px 0;  
`

export const SectionTitleStyled = styled.h2`
  ${dmSans.getBold()}
  ${getFontSize({size: 36, lineHeight: 48})};
  margin-bottom: 32px;
`