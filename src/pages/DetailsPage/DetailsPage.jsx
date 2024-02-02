import {useParams} from 'react-router-dom'
import Container from '../../components/Container/Container'

const DetailsPage = () => {
  const {id} = useParams()

  return (
    <Container>
      Details of product with id = {id}
    </Container>
  )
}

export default DetailsPage