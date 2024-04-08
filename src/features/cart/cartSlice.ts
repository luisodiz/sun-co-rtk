import type { RootState } from 'app/store'
import type { Cart, CartProduct } from 'types'

import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { getProductTotalPrice, getPriceWithDiscount } from 'utils/utils.js'

const cartAdapter = createEntityAdapter<CartProduct>()
const initialState = cartAdapter.getInitialState<Cart>({
  tax: 6,
  delivery: 20,
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer(state, { payload }) {
        const existingProduct = state.entities[payload.id]

        if (existingProduct) {
          const newTotalPrice = existingProduct.totalPrice + payload.totalPrice

          cartAdapter.updateOne(state, {
            id: existingProduct.id,
            changes: {
              quantity: existingProduct.quantity + payload.quantity,
              totalPrice: newTotalPrice,
              discountInUsd:
                existingProduct.discountInUsd + payload.discountInUsd,
            },
          })
        } else {
          cartAdapter.addOne(state, payload)
        }
      },
      prepare(payload: { product: CartProduct; quantity: number }) {
        const { product, quantity } = payload

        const productCopy: CartProduct = { ...product }
        productCopy.price = Math.floor(productCopy.price)
        productCopy.quantity = quantity
        productCopy.priceWithDiscount = Math.floor(
          getPriceWithDiscount(productCopy.price, productCopy.discount || 0)
        )
        productCopy.totalPrice = Math.floor(
          getProductTotalPrice(
            productCopy.priceWithDiscount,
            productCopy.quantity
          )
        )
        productCopy.discountInUsd = Math.floor(
          (productCopy.price - productCopy.priceWithDiscount) *
            productCopy.quantity
        )

        return {
          payload: productCopy,
          meta: null,
          error: null,
        }
      },
    },
    updateProduct(state, { payload: { product, quantity } }) {
      cartAdapter.updateOne(state, {
        id: product.id,
        changes: {
          quantity,
          totalPrice: Math.floor(product.priceWithDiscount * quantity),
          discountInUsd:
            Math.floor(product.price - product.priceWithDiscount) * quantity,
        },
      })
    },
    removeFromCart(state, action: PayloadAction<string>) {
      cartAdapter.removeOne(state, action.payload)
    },
  },
})

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemsIds,
  selectTotal: selectTotalCountCartItems,
} = cartAdapter.getSelectors((state: RootState) => state.cart)

export const { addToCart, removeFromCart, updateProduct } = cartSlice.actions
export const cartReducer = cartSlice.reducer
