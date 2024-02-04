import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import Container from '../../components/Container/Container'
import Row from '../../components/Row/Row'
import Col from '../../components/Col/Col'
import DetailsSlider from '../../components/DetailsSlider/DetailsSlider'
import AddToCart from '../../components/AddToCart/AddToCart'
import DetailInfo from '../../components/DetailInfo/DetailInfo'

import data from '../../data.json'

const StyledDetailPage = styled(Container)`
  .col {
    padding: 0 12px;
    width: 100%;
    flex: 0 0 100%;
  }

  .add-to-cart {
    margin-top: 24px;
  }

  .row {
    margin: 0 -12px;
  }

  @media ${({theme}) => theme.media.desktop} {
    .row {
      margin: 0 -17px;
    }

    .col {
      padding: 0 17px;
      width: 50%;
      flex: 0 0 50%;
    }

    .add-to-cart {
      margin-top: 0;
    }
  }
`

const DetailsPage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const product = data.filter(item => item.id === +id)[0]
    setProduct(product)
  }, [id])

  return (
    <StyledDetailPage>
      <Row className="row">
        <Col className="col">
          {product && <DetailsSlider product={product}/>}
        </Col>
        <Col className="col">
          <AddToCart className="add-to-cart"/>
        </Col>
      </Row>
      <DetailInfo/>
    </StyledDetailPage>
  )
}

export default DetailsPage