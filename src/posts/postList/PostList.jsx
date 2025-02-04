import * as React from 'react';

import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  EditButton,
  DateField,
  BooleanField
} from "react-admin";

// const PostFilter = (props) => (
//   <React.Fragment>
//     <ReferenceInput label="Author" source="userId" reference="users" {...props}>
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//     <SelectInput
//       label="Status"
//       source="status"
//       choices={[
//         { id: 'published', name: 'Published' },
//         { id: 'draft', name: 'Draft' },
//       ]}
//       {...props}
//     />
//   </React.Fragment>
// );

export const PostList = (props) => (
  <List {...props} perPage={10} sort={{ field: 'publishedAt', order: 'DESC' }} >
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <ReferenceField source="userId" reference="users" linkType="show">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedAt" />
      <BooleanField source="status" valueLabelTrue="published" valueLabelFalse="draft" />
      <EditButton />
    </Datagrid>
  </List>
);