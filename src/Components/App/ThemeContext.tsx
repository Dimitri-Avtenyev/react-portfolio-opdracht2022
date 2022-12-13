import React from "react";

interface IThemeContext {
    theme:      string,
    setTheme:   (theme:string) => void
}
export const ThemeContext = React.createContext<IThemeContext>({theme: "dark", setTheme: (theme:string) => {}});

export const switchTheme = (theme: string, color: string) => {
    return { backgroundColor: theme === "dark" ? "black" : "white", color: color }
}

