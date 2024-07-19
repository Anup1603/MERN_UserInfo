import { createContext } from "react";

const UserInfoContext = createContext({
  userInfo: [],
  fetching: false,
  addUser: () => {},
  editUser: () => {},
  deleteUser: () => {},
});

export default UserInfoContext;
