import { useState, useEffect } from 'react';
import { Admin, Resource , ThemeProvider} from 'react-admin';
import posts from './posts';
import users from './users';
import Dashboard from './dashboard/Dashboard';
import authProvider from './authProvider';
import { dataProvider } from './DataProvider';
// import { lightTheme, darkTheme } from './theme';
import {  createTheme } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';





const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setDarkMode(true);
        }
    }, []);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#FF7120', // Couleur primaire
            },
            secondary: {
                main: '#0A0B2E', // Couleur secondaire
                
            },
        },
        typography: {
            fontFamily: 'Roboto',
            fontSize: 14,
            // ... autres styles de typographie
        },
    });

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={theme}>
            <Admin
                dataProvider={dataProvider}
                dashboard={Dashboard}
                authProvider={authProvider}
            >

                <Resource name="posts" {...posts} />
                <Resource name="users" {...users} />
                <Brightness7Icon />


            </Admin>
            <IconButton onClick={handleThemeChange}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </ThemeProvider>
    );
};

export default App;
