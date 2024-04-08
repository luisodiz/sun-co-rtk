import styled from 'styled-components'
import { dmSans, getFontSize } from 'components/styles/mixins'

const Section = (props) => {
  return <StyledSection {...props} />
}

export default Section

const StyledSection = styled.section`
  padding: 24px 0;

  h2 {
    ${dmSans.getBold()};
    ${getFontSize({ size: 28, lineHeight: 36 })};
    color: ${(props) => props.theme.secondaryColor};
    margin-bottom: 24px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 32px 0;

    h2 {
      margin-bottom: 32px;
      ${getFontSize({ size: 36, lineHeight: 48 })};
    }
  }
`
