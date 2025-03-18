import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import { createTheme, ThemeProvider } from "@mui/material/styles";


import "@fontsource/poppins/700.css"; // For Bold weight
import ServoSysImage from "./Components/ServSysImage/ServoSysImage";


const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
export default function App() {

  console.log("i am loadign");
  const router = createBrowserRouter([
    {path:'/',element:<RootLayout/>},
    { path: '/Product/ServosysImage', element:<ServoSysImage/> }
  ])
  
  return (
    
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
   
  )
}
