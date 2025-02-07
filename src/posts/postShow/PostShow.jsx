import {
  Show,
  TextField,
  ReferenceField,
  DateField,
  SimpleShowLayout,
} from "react-admin";
import {withThemeProvider} from "../../withThemeProvider";

const ShowPost = () => (
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

export const PostShow = withThemeProvider(ShowPost)