const numberFormat = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency'
})

export const formatToUSD = (number) => {
  return numberFormat.format(number)
}

export const getProductTotalPrice = (price, quantity) => {
  return price * quantity
}

export const getPriceWithDiscount = (price, discountPercents) => {
  if (discountPercents) {
    return price - (price * (discountPercents / 100))
  }
  return price
}