const numberFormat = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
})

export const formatToUSD = (price?: number): string | undefined => {
  if (price) {
    return numberFormat.format(price)
  }
}

export const getProductTotalPrice = (price: number, quantity: number) => {
  return price * quantity
}

export const getPriceWithDiscount = (
  price: number,
  discountPercents?: number
) => {
  if (discountPercents) {
    return price - price * (discountPercents / 100)
  }
  return price
}
