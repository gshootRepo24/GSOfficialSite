import { createBrowserRouter,RouterProvider } from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import { createTheme, ThemeProvider } from "@mui/material/styles";


import GsImage from "./Components/GsImage/GsSysImage";
import Mfile from "./Components/Mfile/Mfile";
import Gsdocs from "./Components/GsDocs/GsDocs";
import GsAbout from "./Components/About/GsAbout";

const theme = createTheme({
  typography: {
    fontFamily: "Winky Sans, sans-serif",
    fontSize:18,
    fontWeightLight: 300,
    
    },
});
export default function App() {

  // console.log("i am loadign");
  const router = createBrowserRouter([
    {path:'/',element:<RootLayout/>},
    {path:'/servostreams',element:<RootLayout/>},
    { path: '/Nav/GsImage', element:<GsImage/> },
    { path: '/Nav/GsDocs', element:<Gsdocs/> },
    { path: '/Nav/GSFiles', element:<Mfile/> },
    { path: '/Nav/About-Us', element:<GsAbout/> }
  ])
  
  return (
    
    <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
    </ThemeProvider>
   
  )
}
