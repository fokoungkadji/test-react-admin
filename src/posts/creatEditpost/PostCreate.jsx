import {
    Create,
    ReferenceInput,
    SimpleForm,
    TextInput,
    BooleanInput,
    DateInput,
  } from "react-admin";
  
  export const PostCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <DateInput source="publishedAt" fullWidth />
        <ReferenceInput source="userId" reference="users" />
        <BooleanInput source="status" valueLabelTrue="published" valueLabelFalse="draft" />
      </SimpleForm>
    </Create>
  );