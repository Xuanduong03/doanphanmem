import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
const router = createBrowserRouter([
  {
   path: '/',
   element: <DefaultLayout />,
   children: [
    {
      index: true,
      element: <Home />
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
