import * as React from 'react';
import {
    TextField,
    Show,
    SimpleShowLayout
} from 'react-admin';



export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
        </SimpleShowLayout>
    </Show>
);