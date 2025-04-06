import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/user/Home"
import Intro from "./pages/user/Intro"
import ProductsAdmin from "./pages/admin/Products"
import ProductsUser from "./pages/user/Products"
import ProductDetail from "./pages/user/ProductDetail"
import Like from "./pages/user/Like"
import Contact from "./pages/user/Contact"
import Cart from "./pages/user/Cart"
import Checkout from "./pages/user/Checkout"
import Login from "./pages/user/Login"
import Register from "./pages/user/Register"
import DefaultLayoutAdmin from "./layouts/DefaultLayoutAdmin"
import Dashboard from "./pages/admin/Dashboard"
import Category from "./pages/admin/Category"
import CreateProduct from "./pages/admin/CreateProduct"
import UpdateProduct from "./pages/admin/UpdateProduct"
import CreateCategory from "./pages/admin/CreateCategory"
import UpdateCategory from "./pages/admin/UpdateCategory"
import Permission from "./pages/admin/Permission"
import CreatePermision from "./pages/admin/CreatePermission"
import UpdatePermission from "./pages/admin/UpdatePermission"
import Roles from "./pages/admin/Roles"
import Accounts from "./pages/admin/Account"
import CreateAccount from "./pages/admin/CreateAccount"
import UpdateAccount from "./pages/admin/UpdateAccount"
import NotFound from "./pages/admin/NotFound"
const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
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
      element: <ProductsUser />

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
      },
      {
        path: 'products',
        element: <ProductsAdmin />
      },
      {
        path: 'categorys',
        element: <Category />
      },
      {
        path: 'create_product',
        element: <CreateProduct />
      },
      {
        path: 'update_product',
        element: <UpdateProduct />
      },
      {
        path: 'create_category',
        element: <CreateCategory />
      },
      {
        path: 'update_category',
        element: <UpdateCategory />
      },
      {
        path: 'permission',
        element: <Permission />
      },
      {
        path: 'create_permission',
        element: <CreatePermision />
      },
      {
        path: 'update_permission',
        element: <UpdatePermission />
      },
      {
        path: 'roles',
        element: <Roles />
      },
      {
        path: 'accounts',
        element: <Accounts />
      },
      {
        path: 'create_account',
        element: <CreateAccount />
      },
      {
        path: 'update_account',
        element: <UpdateAccount />
      },
    ]
  }

])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
