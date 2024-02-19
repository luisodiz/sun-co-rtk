import BasketCard from './BasketCard'

const CartProductList = ({cartItemsIds}) => {
  return (
    <div>
      {cartItemsIds.map(id => <BasketCard key={id} productId={id}/>)}
    </div>
  )
}

export default CartProductList