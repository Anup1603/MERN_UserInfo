import { useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import UserInfoContext from "../store/User-Info-Context";

function UserData({ item }) {
  const { deleteUser, setCurrentUser } = useContext(UserInfoContext);

  return (
    <>
      <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.age}</td>
        <td>{item.city}</td>
        <td>
          <button onClick={() => setCurrentUser(item)}>
            <FaPencilAlt />
          </button>
        </td>
        <td>
          <button onClick={() => deleteUser(item._id)}>
            <RiDeleteBin6Line />
          </button>
        </td>
      </tr>
    </>
  );
}

export default UserData;
