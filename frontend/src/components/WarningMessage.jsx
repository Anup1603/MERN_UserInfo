import { useContext } from "react";
import UserInfoContext from "../store/User-Info-Context";

function WarningMessage() {
  const { userInfo } = useContext(UserInfoContext);
  return (
    <>
      {userInfo.length === 0 && (
        <p style={{ color: "gray", textAlign: "center" }}>No data of user..!</p>
      )}
    </>
  );
}

export default WarningMessage;
