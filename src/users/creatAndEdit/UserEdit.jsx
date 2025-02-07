import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
} from 'react-admin';
import {withThemeProvider} from "../../withThemeProvider";


export const EditUser = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <SelectInput
                source="status"
                choices={[
                    { id: 'published', name: 'Published' },
                    { id: 'draft', name: 'Draft' },
                ]}
            />
        </SimpleForm>
    </Edit>
);

export const UserEdit = withThemeProvider(EditUser)