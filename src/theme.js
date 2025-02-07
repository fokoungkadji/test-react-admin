
// Thème personnalisé
export const lightTheme = {
  palette: {
    mode: 'light', // Mode clair par défaut
    primary: {
      main: '#FF7120', 
    },
    secondary: {
      main: '#0A0B2E',
    },
    background: {
      default: '#f5f5f5', // Fond clair
      paper: '#ffffff', // Fond des cartes
    },
    text: {
      primary: '#0A0B2E', // Texte principal
      secondary: '#0A0B2E', // Texte secondaire
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
};

// Thème sombre
export const darkTheme = {
  palette: {
    mode: 'dark', // Mode sombre
    primary: {
      main: '#fff', // Couleur primaire orange
    },
    secondary: {
      main: '#0A0B2E', // Couleur secondaire 
    },
    background: {
      default: '#0A0B2E', 
      paper: '#1e1e1e', // Fond des cartes
    },
    text: {
      primary: '#ffffff', // Texte principal
      secondary: '#FF7120', // Texte secondaire
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
};

export const themeConfigs = {
  darkTheme: darkTheme,
  lightTheme: lightTheme
}
