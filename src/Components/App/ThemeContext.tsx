import React from "react";

interface IThemeContext {
    theme:      string,
    setTheme:   (theme:string) => void
}
export const ThemeContext = React.createContext<IThemeContext>({theme: "dark", setTheme: (theme:string) => {}});