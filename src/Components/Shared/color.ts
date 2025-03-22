
export type  MenuTheme = "dark" | 'light' | 'default';
export const Themes = {
    DARK: "dark",
    LIGHT: "light",
  } as { DARK: MenuTheme; LIGHT: MenuTheme };
  
  export const getColorPalette = (theme: MenuTheme) => {
    const prefix = `--${theme}-theme`;
    const styles = getComputedStyle(document.documentElement);
  
    const red = styles.getPropertyValue(`${prefix}-red`),
      green = styles.getPropertyValue(`${prefix}-green`),
      orange = styles.getPropertyValue(`${prefix}-orange`),
      yellow = styles.getPropertyValue(`${prefix}-yellow`),
      black = styles.getPropertyValue(`${prefix}-black`),
      white = styles.getPropertyValue(`${prefix}-white`),
      blue = styles.getPropertyValue(`${prefix}-blue`);
  
      const defaultColor = theme === Themes.DARK ? white : black;
  
    return { red, green, orange, yellow, black, white, blue, defaultColor };
  };
  
  export const getColorPalette2 = (theme: MenuTheme) => {
    const isDark = theme === Themes.DARK;
  
    const primaryFontColor = isDark ? "white" : "black",
      secondaryFontColor = isDark ? "#f16363" : "red",
      ternaryFontColor = isDark ? "#6fc46f" : "green",
      primaryBackgroundColor = isDark ? "#ddd" : "white",
      secondaryBackgroundColor = isDark ? "#605c00" : "#f9f9b3",
      ternaryBackgroundColor = isDark ? "#cfbb8f" : "#fff5de",
      greenBackground = isDark ? "#5c8060" : "#d0f5d4",
      disabledFontColor = isDark ? "#8c8c8c" : "#c6c6c6",
      lightRedBackground = "#ffcccb !important",
      editingLightBlueBackground = "#a2c5cc",
      lightGrayishGreen = isDark ? "#ddeae042 !important" : "#dcedc8 !important",
      paleYellow = isDark ? "#9e94a1 !important" : "#ffffcc !important",
      softYellow = isDark ? "#5072a7 !important" : "#f0f4c3 !important",
      gray91 = isDark ? "#5a5a5a !important" : "#e8e8e8 !important",
      hawkesBlue = isDark ? "#d2daed !important" : "#d1dcff !important";
  
    return {
      primaryFontColor,
      secondaryFontColor,
      ternaryFontColor,
      primaryBackgroundColor,
      secondaryBackGroundColor: secondaryBackgroundColor,
      ternaryBackGroundColor: ternaryBackgroundColor,
      greenBackground,
      disabledFontColor ,
      lightRedBackground ,
      editingLightBlueBackground,
      lightGrayishGreen ,
      paleYellow,
      softYellow ,
      gray91,
      hawkesBlue 

    };
  };
  

