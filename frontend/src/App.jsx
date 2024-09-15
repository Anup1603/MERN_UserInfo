import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import AppTitle from "./components/AppTitle";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { useEffect, useState } from "react";
import UserInfoContext from "./store/User-Info-Context";

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  async function getData() {
    setFetching(true);

    const res = await fetch("https://mern-userinfo.onrender.com/api/users/all");
    const data = await res.json();

    if (!res.ok) {
      console.error(`ERROR while fetching data from backend`);
    }

    if (res.ok) {
      setUserInfo(data);
      setFetching(false);
    }
  }

  useEffect(() => {
    getData();
    console.log("USE EFFECT used");
  }, []);

  const addUser = async (firstName, lastName, email, age, city) => {
    const newUser = { firstName, lastName, email, age, city };
    const res = await fetch(
      "https://mern-userinfo.onrender.com/api/users/all",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("ERROR: Insertion not happen");
    }

    if (res.ok) {
      setUserInfo(data);
      getData();
    }
  };

  const editUser = async (id, updatedUser) => {
    const res = await fetch(
      `https://mern-userinfo.onrender.com/api/users/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedUser),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (!res.ok) {
      console.error("ERROR: Update not happen");
      return;
    }

    const data = await res.json();
    setUserInfo(data);
    getData();
    setCurrentUser(null);
  };

  const deleteUser = async (id) => {
    const res = await fetch(
      `https://mern-userinfo.onrender.com/api/users/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    getData();
  };

  return (
    <UserInfoContext.Provider
      value={{
        userInfo,
        fetching,
        addUser,
        editUser,
        deleteUser,
        setCurrentUser,
        currentUser,
      }}
    >
      <AppTitle />
      <Form />
      <UserList />
    </UserInfoContext.Provider>
  );
}

export default App;
