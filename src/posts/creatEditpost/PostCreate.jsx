import {
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
} from "react-admin";
import {withThemeProvider} from "../../withThemeProvider";

export const CreatePost = () => (
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

export const PostCreate = withThemeProvider(CreatePost);