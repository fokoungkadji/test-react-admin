import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import posts from './posts';
import users from './users';
import Dashboard from './dashboard/Dashboard';
import authProvider from './authProvider';
import {  dataProvider} from './DataProvider';




const App = () => (
    
    <Admin 
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
    >
        <Resource name="posts" {...posts} />
        <Resource name="users" {...users} />
    </Admin>
);

export default App;
