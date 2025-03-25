import  { createContext, useContext, useState } from "react";
 import { getColorPalette2, Themes, MenuTheme } from "./color"; // Your provided functions
 
 // Create Theme Context
 const defaultThemeContext = {
     theme: Themes.LIGHT,
     themeStyles: getColorPalette2(Themes.LIGHT),
     changeTheme: (defaultThemeContext: { theme: MenuTheme; themeStyles: { primaryFontColor: string; secondaryFontColor: string; ternaryFontColor: string; primaryBackgroundColor: string; secondaryBackGroundColor: string; ternaryBackGroundColor: string; greenBackground: string; disabledFontColor: string; lightRedBackground: string; editingLightBlueBackground: string; lightGrayishGreen: string; paleYellow: string; softYellow: string; gray91: string; hawkesBlue: string; }; changeTheme: () => void; }) => {},
     
 };
 
 const GSThemeContext = createContext(defaultThemeContext);
 export const useGSTheme = () => useContext(GSThemeContext);
 
 export const GSThemeProvider = ({ children }:any) => {
     const [theme, setTheme] = useState<MenuTheme>(Themes.LIGHT);
 
     const changeTheme = () => {
         setTheme((prevTheme) => (prevTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK));
     };
 
     const themeStyles = getColorPalette2(theme);
 
     return (
         <GSThemeContext.Provider value={{ theme, themeStyles, changeTheme }}>
             {children}
         </GSThemeContext.Provider>
     );
 };