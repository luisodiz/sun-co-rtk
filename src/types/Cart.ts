import type { Product } from 'types/Product'

export interface Cart {
  tax: number
  delivery: number
}

export interface CartProduct extends Product {
  quantity?: number
  totalPrice?: number
  discountInUsd?: number
  priceWithDiscount?: number
}
