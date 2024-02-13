import {client, ALL_PRODUCTS} from '../../api/client'
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'

const productsAdapter = createEntityAdapter()

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => await client.get(ALL_PRODUCTS)
)

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({
    status: 'idle',
    error: null
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = 'idle'
      state.error = null
      productsAdapter.upsertMany(state, action.payload)
    }).addCase(fetchAllProducts.rejected, (state, action) => {
      state.error = action.error
      state.status = 'failed'
    })
  }
})

export default productsSlice.reducer

// Selectors
export const {
  selectAll: selectAllProducts,
  selectIds: selectProductsIds
} = productsAdapter.getSelectors()