import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

import Root from './Root'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import CartPage from './pages/CartPage/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import {Provider} from 'react-redux'
import {store} from './app/store'
import axios from 'axios'
import {fetchAllProducts} from './features/products/productsSlice'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<HomePage/>}/>
      <Route path="products" element={<ProductsPage/>}/>
      <Route path="products/:id" element={<DetailsPage/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
  )
)

store.dispatch(fetchAllProducts())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
