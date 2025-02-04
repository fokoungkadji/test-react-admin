import {
  Edit,
  ReferenceInput,
  DateInput,
  BooleanInput,
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
      <BooleanInput source="status" />
    </SimpleForm>
  </Edit>
);
