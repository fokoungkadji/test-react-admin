import { createTheme } from '@mui/material/styles';



export const LightTheme = createTheme({
    palette: {
      mode: 'light', // Important for contrast calculations
      primary: {
        main: '#3f51b5', // Example: Indigo
      },
      secondary: {
        main: '#f50057', // Example: Pink
      },
      background: {  // Important for contrast
        default: '#ffffff',
        paper: '#f5f5f5', // Slightly off-white for cards/panels
      },
    },
    typography: {
      h1: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500,
      },
      body: {
        fontFamily: 'Arial, sans-serif',
      },
    },
  });