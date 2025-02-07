import {
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
} from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <DateInput source="publishedAt" />
      <ReferenceInput source="userId" reference="users" />
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