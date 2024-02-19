import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAllProducts, selectProductsIds} from './productsSlice'

const useFetchProducts = () => {
  const dispatch = useDispatch()
  const productsIds = useSelector(selectProductsIds)
  const status = useSelector(state => state.products.status)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts())
    }
  }, [
    status,
    dispatch
  ])

  return {productsIds, status, error}
}

export default useFetchProducts