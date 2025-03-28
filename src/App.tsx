import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Intro from "./pages/Intro"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
const router = createBrowserRouter([
  {
   path: '/',
   element: <DefaultLayout />,
   children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/intro',
      element: <Intro />
    },
    {
      path: '/products/all',
      element: <Products />

    },
    {
      path: '/detail/:id',
      element: <ProductDetail />
    }
   ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
