import styled from 'styled-components'
import {dmSans, getFontSize} from '../styles/mixins'

import Row from '../Row/Row'
import Col from '../Col/Col'

const StyledDetailInfo = styled.div`
  padding: 40px 0;

  h3 {
    ${dmSans.getBold()};
    ${getFontSize({size: 20, lineHeight: 24})};
    padding-bottom: 8px;
    border-bottom: 1px solid #e9e9e9;
  }

  .detail-description {
    margin-bottom: 24px;
  }

  .detail-img {
    border-radius: 13px;
    height: 248px;
  }

  @media ${props => props.theme.media.desktop} {
    padding: 64px 0;

    .detail-description {
      margin-bottom: 0;
    }

    .detail-img {
      height: auto;
    }
  }
`

const DetailInfo = () => {
  return (
    <StyledDetailInfo>
      <Row className="row">
        <Col className="col">
          <div className="detail-description">
            <h3>Description</h3>
            <p>
              Energize your look with a fresh take on heritage adidas style. The
              adidas Daily 3.0 Shoes cut a classic profile with a modern suede
              upper. Your walk across campus or commute across town has never
              looked or felt this good.
            </p>
            <ul>
              <li>Regular fit</li>
              <li>Lace closure</li>
              <li>Rubber outsole with vulcanized look</li>
              <li>Imported</li>
            </ul>
          </div>
        </Col>
        <Col className="col">
          <img className="detail-img" src={`/img/detail-img.jpg`} alt=""/>
        </Col>
      </Row>
    </StyledDetailInfo>
  )
}

export default DetailInfo