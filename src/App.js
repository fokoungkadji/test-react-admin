import { Admin, Layout, Resource } from 'react-admin';
import posts from './posts';
import users from './users';
import authProvider from './authProvider';
import { dataProvider } from './DataProvider';
import { Dashboard } from "./dashboard/Dashboard";
import { Fab, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';


import { AppBar } from 'react-admin';

const MyAppBar = () => (
    // Barre de menu personaliser pour faire disparaitre le boutton par default qui controle le theme
    <AppBar toolbar={
        <>
            {/*<LocalesMenuButton />*/}
            {/*/!* no ToggleThemeButton here *!/*/}
            {/*<RefreshIconButton />*/}
        </>
    } />
)
const MyLayout = ({ children }) => (
    <Layout appBar={MyAppBar}>
        {children}
    </Layout>
);

const App = () => {
    const [mode, setMode] = useState('')
    const theme = useTheme();
    const onModeChange = useCallback(() => {
        const storedMode = JSON.parse(localStorage.getItem('RaStore.theme'))

        if (storedMode === "light") {
            localStorage.setItem('RaStore.theme', JSON.stringify('dark'))
            setMode('dark')
        }
        else {
            localStorage.setItem('RaStore.theme', JSON.stringify('light'))
            setMode('light')
        }
        window.location.reload()
    }, [])

    useEffect(() => {
        const storedMode = JSON.parse(localStorage.getItem('RaStore.theme'))
        setMode(storedMode)
    }, []);



    return <Fragment>
        <Admin
            dataProvider={dataProvider}
            dashboard={Dashboard}
            authProvider={authProvider}
            layout={MyLayout}
        >
            <Resource name="posts" {...posts} />
            <Resource name="users" {...users} />
        </Admin>
        <div style={{ position: 'absolute', bottom: '0px', right: '10px' }}>
            <Fab aria-label="toggle" sx={{ backgroundColor: theme.palette.primary.main }}>
                <IconButton onClick={onModeChange}>
                    {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Fab>
        </div>
    </Fragment>
};

export default App;
