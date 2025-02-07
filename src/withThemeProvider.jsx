import React from "react";
import {ThemeProvider, ThemesContext} from "react-admin";
import {themeConfigs} from "./theme";

export const withThemeProvider = (WrappedComponent) => {
    return (props) => {
        return <ThemesContext.Provider value={themeConfigs}>
            <ThemeProvider>
                <WrappedComponent {...props}/>
            </ThemeProvider>
        </ThemesContext.Provider>
    }
}