import BasketCard from '../BasketCard/BasketCard'

const CartProductList = ({products}) => {
  return (
    <div>
      {
        products.length > 0 &&
        products.map(({id, ...props}) => (
          <BasketCard key={id} {...props}/>
        ))
      }
    </div>
  )
}

export default CartProductList