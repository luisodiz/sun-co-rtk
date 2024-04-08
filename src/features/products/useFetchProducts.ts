import type { Product } from 'types'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'

import {
  fetchAllProducts,
  selectProductsIds,
} from 'features/products/productsSlice'

const useFetchProducts = () => {
  const dispatch = useAppDispatch()
  const productsIds = useAppSelector(selectProductsIds)
  const status = useAppSelector((state) => state.products.status)
  const error = useAppSelector((state) => state.products.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts())
    }
  }, [status, dispatch])

  return { productsIds, status, error }
}

export default useFetchProducts
