import * as React from 'react';
import { List, Datagrid,TextField, EmailField,} from 'react-admin';
import BulkDeactivateButton from './BulkDeactivateButton';



export const UserList = (props) => (
    <List {...props} >
      <Datagrid bulkActionButtons={<BulkDeactivateButton />}>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" style={{ textDecoration: 'none' }} />
        <TextField source="phone" />
        <TextField source="status" /> {/* Affichez le statut de l'utilisateur */}
      </Datagrid>
    </List>
  );