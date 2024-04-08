import type { CartProduct } from 'types'

import BasketCard from 'features/cart/BasketCard'

interface CartProductListProps {
  cartItemsIds: CartProduct['id'][]
}

const CartProductList = ({ cartItemsIds }: CartProductListProps) => {
  return (
    <div>
      {cartItemsIds.map((id) => (
        <BasketCard key={id} productId={id} />
      ))}
    </div>
  )
}

export default CartProductList
