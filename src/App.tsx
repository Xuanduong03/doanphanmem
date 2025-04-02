import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/user/Home"
import Intro from "./pages/user/Intro"
import Products from "./pages/user/Products"
import ProductDetail from "./pages/user/ProductDetail"
import Like from "./pages/user/Like"
import Contact from "./pages/user/Contact"
import Cart from "./pages/user/Cart"
import Checkout from "./pages/user/Checkout"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"
import DefaultLayoutAdmin from "./layouts/DefaultLayoutAdmin"
import Dashboard from "./pages/admin/Dashboard"
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
    },
    {
      path: '/like',
      element: <Like />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
   ]
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/admin',
    element: <DefaultLayoutAdmin />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
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
