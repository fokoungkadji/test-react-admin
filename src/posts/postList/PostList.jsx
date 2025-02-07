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
    useRecordContext,
} from 'react-admin';
import { Chip } from '@mui/material';
import {withThemeProvider} from "../../withThemeProvider";

// Composant de filtre
const PostFilter = (props) => (

  //{...props} : je passe toutes les propriétés reçues par PostFilter au composant Filter.
  <Filter {...props}> 
  
    {/* 
        alwaysOn : Le champ de recherche doit toujours être visible 
        "q" : Est la clé qui sera utilisée pour envoyer la valeur du champ dans la requête de filtrage.
    */}
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

const StatusField = () => {

  const record = useRecordContext(); // Utilisation d'un hook pour accéder à "record"

  if (!record) return null;  //Si record n'est pas vide alors...

  // Si status est égal à "published", la valeur de statusColor sera "success" sinon "default".
  const statusColor = record.status === 'published' ? 'success' : 'default';

  // Si la condition est vraie, la valeur de statusLabel sera "Published" sinon "Draft".
  const statusLabel = record.status === 'published' ? 'Published' : 'Draft';

  return (
    // Un composant de Material UI pour afficher le statut avec une couleur.
    <Chip
      label={statusLabel}
      color={statusColor}

    />
  );
};

// Composant principal Post
const Posts = (props) => (

      <List {...props} perPage={10} sort={{ field: 'publishedAt', order: 'DESC' }} filters={<PostFilter />} >

          <Datagrid rowClick="edit" >
              <TextField source="title"/>

              {/*  linkType="show" signifie que cliquer sur le nom de l'auteur ouvrira la
      vue détaillée de l'utilisateur correspondant.

  */}

              <ReferenceField label="Author" source="userId" reference="users" linkType="show" >
                  <TextField source="name" />
              </ReferenceField>

              <DateField source="publishedAt"/>

              {/* sortable: indique que la colonne peut être triée. */}
              <StatusField source="status" sortable />

              <EditButton />
          </Datagrid>
      </List>

);

export const PostList = withThemeProvider(Posts);