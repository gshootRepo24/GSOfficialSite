import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import { createTheme, ThemeProvider } from "@mui/material/styles";


import GsImage from "./Components/GsImage/GsSysImage";
import Mfile from "./Components/Mfile/Mfile";
import Gsdocs from "./Components/GsDocs/GsDocs";
import { GSThemeProvider, useGSTheme } from "./Components/Shared/GSThemeContext";
import { useContext } from "react";
import { Themes } from "./Components/Shared/color";


const theme = createTheme({
  typography: {
    fontFamily: "Winky Sans, sans-serif",
    fontSize:18,
    
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: "#0000", // Apply color globally
        },
      },
    },
  },
});
export default function App() {
  console.log("i am loadign");
  const router = createBrowserRouter([
    {path:'/',element:<RootLayout/>},
    {path:'/servostreams',element:<RootLayout/>},
    { path: '/Servoimage', element:<GsImage/> },
    { path: '/Servodocs', element:<Gsdocs/> },
    { path: '/mfile', element:<Mfile/> }
  ])
  
  return (
    
    // <ThemeProvider theme={theme}>
       <GSThemeProvider>
       <RouterProvider router={router} />

       </GSThemeProvider>
    // </ThemeProvider>
   
  )
}
