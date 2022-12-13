import React, { HTMLAttributes } from "react";

interface IThemeContext {
    theme:      string,
    setTheme:   (theme:string) => void
}
export const ThemeContext = React.createContext<IThemeContext>({theme: "dark", setTheme: (theme:string) => {}});

export const switchTheme = (theme: string) => {
    return { 
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black", 
    }
}
export const switchThemeTextColor = (theme:string) => {
    return {
        color: theme === "dark" ? "white" : "black"
    }
}


