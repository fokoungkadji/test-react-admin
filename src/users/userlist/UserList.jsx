import * as React from 'react';
import { List, Datagrid,TextField, EmailField,} from 'react-admin';
import BulkDeactivateButton from './BulkDeactivateButton';
import {withThemeProvider} from "../../withThemeProvider";



export const ListUser = (props) => (
    <List {...props} >
      <Datagrid bulkActionButtons={<BulkDeactivateButton />}>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" style={{ textDecoration: 'none' }} />
        <TextField source="phone" />
        <TextField source="status" /> 
      </Datagrid>
    </List>
  );

  export const UserList = withThemeProvider(ListUser)