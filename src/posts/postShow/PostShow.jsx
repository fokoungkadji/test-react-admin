import {
    Show,
    TextField,
    ReferenceField,
    DateField,
    SimpleShowLayout,
  } from "react-admin";
  
  export const PostShow = () => (
    <Show>
      <SimpleShowLayout>
      <TextField source="title" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedAt" />
      <TextField source="status" />
    </SimpleShowLayout>
    </Show>
  );