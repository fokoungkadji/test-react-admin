import UserIcon from '@mui/icons-material/People';
import { UserList } from "./userlist/UserList";
import { UserEdit } from "./creatAndEdit/UserEdit";
import { UserCreate } from "./creatAndEdit/UserCreate";
import { UserShow } from "./userShow/UserShow";



export default {
    list: UserList,
    edit: UserEdit,
    create: UserCreate,
    show: UserShow,
    icon: UserIcon,
    recordRepresentation: "reference",
  };