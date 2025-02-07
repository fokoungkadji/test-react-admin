import * as React from 'react';
import {
    SimpleForm,
    Create,
    TextInput,
    SelectInput,
} from 'react-admin';
import {withThemeProvider} from "../../withThemeProvider";


export const CreateUser = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" type="email" />
            <TextInput source="phone" />
            <SelectInput
                source="status"
                choices={[
                    { id: 'published', name: 'Published' },
                    { id: 'draft', name: 'Draft' },
                ]}
            />
        </SimpleForm>
    </Create>
);
 
export const UserCreate = withThemeProvider(CreateUser)