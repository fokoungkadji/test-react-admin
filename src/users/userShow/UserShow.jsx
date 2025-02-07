import * as React from 'react';
import {
    TextField,
    Show,
    SimpleShowLayout,
} from 'react-admin';
import {withThemeProvider} from "../../withThemeProvider";


export const ShowUser = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="status"/>
        </SimpleShowLayout>
    </Show>
);

export const UserShow = withThemeProvider(ShowUser)