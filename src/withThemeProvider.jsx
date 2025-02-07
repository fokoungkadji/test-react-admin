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

// ThemesContext.Provider: Fournit themeConfigs à tous les composants enfants via  ThemesContext.
// ThemeProvider :Applique le thème à la partie encapsulée.


// je me sert de withThemeProvider pour injecter le thème dans  l'application