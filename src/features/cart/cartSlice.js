import {createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import {
  getProductTotalPrice,
  getPriceWithDiscount
} from '../../utils/utils'

const cartAdapter = createEntityAdapter()

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState({
    tax: 6,
    delivery: 20
  }),
  reducers: {
    addToCart: {
      reducer(state, {payload}) {
        const existingProduct = state.entities[payload.id]

        if (existingProduct) {
          const newTotalPrice = existingProduct.totalPrice +
            payload.totalPrice

          cartAdapter.updateOne(state, {
            id: existingProduct.id,
            changes: {
              quantity: existingProduct.quantity + payload.quantity,
              totalPrice: newTotalPrice,
              discountInUsd: existingProduct.discountInUsd +
                payload.discountInUsd
            }
          })
        } else {
          cartAdapter.addOne(state, payload)
        }
      },
      prepare({product, quantity}) {
        const productCopy = {...product}
        productCopy.price = Math.floor(productCopy.price)
        productCopy.quantity = quantity
        productCopy.priceWithDiscount = Math.floor(
          getPriceWithDiscount(productCopy.price,
            productCopy.discount || 0))
        productCopy.totalPrice = Math.floor(
          getProductTotalPrice(
            productCopy.priceWithDiscount, productCopy.quantity
          )
        )
        productCopy.discountInUsd = Math.floor(
          (productCopy.price - productCopy.priceWithDiscount) *
          productCopy.quantity
        )

        return {
          payload: productCopy
        }
      }
    },
    updateProduct(state, {payload: {product, quantity}}) {
      cartAdapter.updateOne(state, {
        id: product.id,
        changes: {
          quantity,
          totalPrice: Math.floor(product.priceWithDiscount * quantity),
          discountInUsd: Math.floor(product.price - product.priceWithDiscount) *
            quantity
        }
      })
    },
    removeFromCart(state, {payload}) {
      cartAdapter.removeOne(state, payload)
    }
  }
})

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemsIds,
  selectTotal: selectTotalCountCartItems
} = cartAdapter.getSelectors(state => state.cart)

export const {addToCart, removeFromCart, updateProduct} = cartSlice.actions
export default cartSlice.reducer