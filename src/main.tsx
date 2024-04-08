import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Root from './Root'
import HomePage from 'pages/HomePage/HomePage'
import ProductsPage from 'pages/ProductsPage/ProductsPage'
import DetailsPage from 'features/products/DetailsPage'
import CartPage from 'features/cart/CartPage'
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage'
import { Provider } from 'react-redux'
import { store } from 'app/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="products/:productId" element={<DetailsPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
