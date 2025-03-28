import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Intro from "./pages/Intro"
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
