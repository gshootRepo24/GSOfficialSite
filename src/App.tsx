import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import GsImage from "./Components/GsImage/GsSysImage";
import Mfile from "./Components/Mfile/Mfile";
import Gsdocs from "./Components/GsDocs/GsDocs";
import GsAbout from "./Components/About/GsAbout";
import GSWebScan from "./Components/GSWebScan/GSWebScan";
import { ThemeProvider } from "./Components/ThemesProvider/ThemeProvider";


// const theme = createTheme({
//   typography: {
//     fontFamily: "Winky Sans, sans-serif",
//     fontSize: 18,
//     fontWeightLight: 300,
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         body: {
//           color: "#ffff", // Apply color globally
//         },
//       },
//     },
//   },
// });

export default function App() {
  // console.log("i am loadign");
  const router = createBrowserRouter([
    { path: "/", element: <RootLayout /> },
    { path: "/servostreams", element: <RootLayout /> },
    { path: "/Nav/GsImage", element: <GsImage /> },
    { path: "/Nav/GsDocs", element: <Gsdocs /> },
    { path: "/Nav/GSFiles", element: <Mfile /> },
    { path: '/Nav/GsWebScan', element:<GSWebScan/> },
    { path: "/Nav/About-Us", element: <GsAbout /> },
  ]);

  return (
    // // <ThemeProvider theme={theme}>
    // {/* <GSThemeProvider> */}
      
    // {/* </GSThemeProvider> */}
    // //  </ThemeProvider>
    <>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
   
    </>
  );
}