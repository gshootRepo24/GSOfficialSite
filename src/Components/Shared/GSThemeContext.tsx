import React, { createContext, useContext, useState } from "react";
import { getColorPalette2, Themes, MenuTheme } from "./color"; // Your provided functions

// Create Theme Context
const defaultThemeContext = {
    theme: Themes.LIGHT,
    themeStyles: getColorPalette2(Themes.LIGHT),
    toggleTheme: () => {},
};

const GSThemeContext = createContext(defaultThemeContext);
export const useGSTheme = () => useContext(GSThemeContext);

export const GSThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState<MenuTheme>(Themes.LIGHT);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Themes.DARK ? Themes.LIGHT : Themes.DARK));
    };

    const themeStyles = getColorPalette2(theme);

    return (
        <GSThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
            {children}
        </GSThemeContext.Provider>
    );
};
