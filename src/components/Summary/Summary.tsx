import React from 'react'

import styled from 'styled-components'
import { dmSans, getFontSize } from 'components/styles/mixins'

interface BlockProps {
  className?: string
  children?: React.ReactNode
  readonly $noBorder?: boolean
}

const StyledBlock = styled.div<BlockProps>`
  padding: 24px 20px;
  border-bottom: ${(props) => (props.$noBorder ? 'none' : '1px solid #e9e9e9')};

  @media ${(props) => props.theme.media.desktop} {
    padding: 32px 36px;
  }
`

export const Block = (props: BlockProps) => {
  return <StyledBlock {...props} />
}

interface TitleProps {
  className?: string
  children?: React.ReactNode
}

const StyledTitle = styled.h1<TitleProps>`
  ${dmSans.getBold()};
  ${getFontSize({ size: 28, lineHeight: 36 })};
  margin-bottom: 4px;

  @media ${(props) => props.theme.media.desktop} {
    ${getFontSize({ size: 36, lineHeight: 48 })};
    margin-bottom: 0;
  }
`

export const Title = (props: TitleProps) => {
  return <StyledTitle {...props} />
}

interface SummaryProps {
  className?: string
  children?: React.ReactNode
}

const StyledSummary = styled.div<SummaryProps>`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3.33px 50px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  background: #fff;
`

const Summary = (props: SummaryProps) => {
  return <StyledSummary {...props} />
}

export default Summary
