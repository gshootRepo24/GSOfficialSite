import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./Components/RootLayout"

export default function App() {
  const router = createBrowserRouter([
    {path:'/',element:<RootLayout/>,
      children: [
        { path: '/Product' }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}
