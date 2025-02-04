import * as React from 'react';
import {
    SimpleForm,
    Create,
    TextInput,
} from 'react-admin';


export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" type="email" />
            <TextInput source="phone" />
        </SimpleForm>
    </Create>
);