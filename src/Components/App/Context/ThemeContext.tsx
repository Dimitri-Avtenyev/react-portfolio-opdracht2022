import React from "react";

interface IThemeContext {
    theme:      string,
    setTheme:   (theme:string) => void
}
export const ThemeContext = React.createContext<IThemeContext>({theme: "dark", setTheme: (theme:string) => {}});

export const switchTheme = (theme: string) => {
    return { 
        backgroundColor: theme === "dark" ? "rgb(18, 18, 18)" : "white",
        color: theme === "dark" ? "white" : "black"
    }
}


