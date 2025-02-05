import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';
import { Chip } from '@mui/material';

// Composant de filtre
const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Author" source="userId" reference="users" alwaysOn>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <SelectInput
      source="status"
      choices={[
        { id: 'published', name: 'Published' },
        { id: 'draft', name: 'Draft' },
      ]}
      alwaysOn
    />
  </Filter>
);

// Composant personnalisé pour le statut

const StatusField = ({ record }) => {
  if (!record) return null;

  const statusColor = record.status === 'published' ? 'success' : 'default';
  const statusLabel = record.status === 'published' ? 'Published' : 'Draft';

  return (
    <Chip
      label={statusLabel}
      color={statusColor}
      variant="outlined"
    />
  );
};

// Composant principal PostList
export const PostList = (props) => (

  <List {...props} perPage={10} sort={{ field: 'publishedAt', order: 'DESC' }} filters={<PostFilter />} >

    <Datagrid rowClick="edit" >
      <TextField source="title" sortable />
      <ReferenceField source="userId" reference="users" linkType="show" >
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedAt" sortable />
      <TextField source="status" sortable />
      {/* <StatusField source="status" sortable /> */}
      <EditButton />
    </Datagrid>
  </List>

);


// import * as React from 'react';

// import {
//   Datagrid,
//   List,
//   ReferenceField,
//   TextField,
//   EditButton,
//   DateField,
//   BooleanField
// } from "react-admin";

// // const PostFilter = (props) => (
// //   <React.Fragment>
// //     <ReferenceInput label="Author" source="userId" reference="users" {...props}>
// //       <SelectInput optionText="name" />
// //     </ReferenceInput>
// //     <SelectInput
// //       label="Status"
// //       source="status"
// //       choices={[
// //         { id: 'published', name: 'Published' },
// //         { id: 'draft', name: 'Draft' },
// //       ]}
// //       {...props}
// //     />
// //   </React.Fragment>
// // );

// export const PostList = (props) => (
//   <List {...props} perPage={10} sort={{ field: 'publishedAt', order: 'DESC' }} >
//     <Datagrid rowClick="edit">
//       <TextField source="title" />
//       <ReferenceField source="userId" reference="users" linkType="show">
//         <TextField source="name" />
//       </ReferenceField>
//       <DateField source="publishedAt" />
//       <TextField source="status" style={{
//           color: record => record.status === 'published' ? 'green' : 'gray'
//         }} />
//       <EditButton />
//     </Datagrid>
//   </List>
// );