import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@fontsource/poppins/700.css"; // For Bold weight


const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
export default function App() {
  const router = createBrowserRouter([
    {path:'/',element:<RootLayout/>,
      children: [
        { path: '/Product' }
      ]
    }
  ])
  return (
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
   
  )
}
