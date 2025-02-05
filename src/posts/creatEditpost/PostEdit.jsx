import {
  Edit,
  ReferenceInput,
  DateInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <ReferenceInput source="userId" reference="users">
        <TextField source="name" />
      </ReferenceInput>
      <DateInput source="publishedAt" />
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
