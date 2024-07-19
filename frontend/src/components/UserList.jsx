import { MdDeleteSweep } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";

import WarningMessage from "./WarningMessage";
import UserData from "./UserData";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useContext } from "react";
import UserInfoContext from "../store/User-Info-Context";

function UserList() {
  const { userInfo, fetching } = useContext(UserInfoContext);

  return (
    <>
      <h2>User Data</h2>
      <p>
        <span style={{ color: "red", fontWeight: "bold", fontSize: "30px" }}>
          {userInfo.length}
        </span>{" "}
        User{userInfo.length !== 1 && "s"} are in this list.
      </p>

      {fetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <WarningMessage />
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>City</th>
                <th style={{ fontSize: "20px" }}>
                  <LiaUserEditSolid />
                </th>
                <th style={{ fontSize: "20px" }}>
                  <MdDeleteSweep />
                </th>
              </tr>
            </thead>
            <tbody>
              {userInfo.map((item) => (
                <UserData key={item._id} item={item} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default UserList;
