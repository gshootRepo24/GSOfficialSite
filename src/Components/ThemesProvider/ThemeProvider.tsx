import { createContext,useState } from "react";
import { colors } from "./color";


export const ThemeContext = createContext({
  theme: 'light',
  colors:colors.light,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const updatedTheme = theme === "light" ? "dark" : "light";
    setTheme(updatedTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme,colors:colors[theme], toggleTheme }}>{children}</ThemeContext.Provider>
  );
}