import {client, ALL_PRODUCTS} from '../../api/client'
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'

const productsAdapter = createEntityAdapter()

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    try {
      return await client.get(ALL_PRODUCTS)
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }
)

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => await client.get(ALL_PRODUCTS + `/${id}`)
)

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({
    status: 'idle',
    error: null,
    currentProduct: null
  }),
  reducers: {
    addCurrentProduct(state, {payload}) {
      state.currentProduct = payload
    },
    clearCurrentProduct(state) {
      state.currentProduct = null
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.status = 'loading'
    }).addCase(fetchAllProducts.fulfilled, (state, action) => {
      // handle 404
      if (action.payload) {
        state.status = 'succeeded'
        state.error = null
        productsAdapter.upsertMany(state, action.payload)
      }
    }).addCase(fetchAllProducts.rejected, (state, action) => {
      state.error = action.error
      state.status = 'failed'
    })
  }
})

export const {addCurrentProduct, clearCurrentProduct} = productsSlice.actions
export default productsSlice.reducer

// Selectors
export const {
  selectIds: selectProductsIds,
  selectById: selectProductById
} = productsAdapter.getSelectors(state => state.products)