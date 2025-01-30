import PostIcon from '@mui/icons-material/Book';
import { PostList } from "./postList/PostList";
import { PostEdit } from "./creatEditpost/PostEdit";
import { PostCreate } from "./creatEditpost/PostCreate";
import { PostShow } from "./postShow/PostShow";



export default {
    list: PostList,
    edit: PostEdit,
    create: PostCreate,
    show: PostShow,
    icon: PostIcon,
    recordRepresentation: "reference",
  };