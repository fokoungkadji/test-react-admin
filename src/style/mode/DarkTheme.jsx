import { createTheme } from '@mui/material/styles';


export const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9', // Light blue for primary in dark mode
      },
      secondary: {
        main: '#f48fb1', // Lighter pink for secondary
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1e1e1e', // Slightly lighter for paper elements
      },
    },
    typography: { // You can adjust dark mode typography if needed
      h1: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500,
        color: '#fff', // Ensure text is visible
      },
      body1: {
        fontFamily: 'Arial, sans-serif',
        color: '#eee', // Good contrast on dark background
      },
    },
  });