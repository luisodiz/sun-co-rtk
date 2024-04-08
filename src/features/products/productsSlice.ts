import type { RootState } from 'app/store'
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import type { Product } from 'types'

import { client, ALL_PRODUCTS } from 'api/client'
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'

const productsAdapter = createEntityAdapter<Product>()

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    try {
      return await client.get<Product[]>(ALL_PRODUCTS)
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: string) => await client.get<Product>(ALL_PRODUCTS + `/${id}`)
)

interface ProductAdapterInitialState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: SerializedError | null
  currentProduct?: Product | null
}

const productAdapterInitialState: ProductAdapterInitialState = {
  status: 'idle',
  error: null,
  currentProduct: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(productAdapterInitialState),
  reducers: {
    addCurrentProduct(state, { payload }) {
      state.currentProduct = payload
    },
    clearCurrentProduct(state) {
      state.currentProduct = null
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(
        fetchAllProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = 'succeeded'
          state.error = null
          productsAdapter.upsertMany(state, action.payload)
        }
      )
      .addCase(fetchAllProducts.rejected, (state, action) => {
        if (action.error && action.error instanceof AxiosError) {
          // Можно как то обработать эту ошибку, отправить на сервис ошибок
          console.log(action)
        } else {
          // Ошибка не из AxiosError
          console.log(action.error)
        }

        state.error = action.error
        state.status = 'failed'
      })
  },
})

export const { addCurrentProduct, clearCurrentProduct } = productsSlice.actions
export const productsReducer = productsSlice.reducer

// Selectors
export const { selectIds: selectProductsIds, selectById: selectProductById } =
  productsAdapter.getSelectors((state: RootState) => state.products)
