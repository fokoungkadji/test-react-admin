import {
    Show,
    TextField,
    ReferenceField,
    BooleanField,
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
      <BooleanField source="status" valueLabelTrue="published" valueLabelFalse="draft" />
    </SimpleShowLayout>
    </Show>
  );