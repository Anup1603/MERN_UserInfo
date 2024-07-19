import React, { useContext, useEffect, useRef } from "react";
import SubmitBtn from "./SubmitBtn";
import UserInfoContext from "../store/User-Info-Context";

function Form() {
  const { addUser, editUser, currentUser } = useContext(UserInfoContext);

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const ageRef = useRef("");
  const cityRef = useRef("");

  useEffect(() => {
    if (currentUser) {
      firstNameRef.current.value = currentUser.firstName;
      lastNameRef.current.value = currentUser.lastName;
      emailRef.current.value = currentUser.email;
      ageRef.current.value = currentUser.age;
      cityRef.current.value = currentUser.city;
    } else {
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      ageRef.current.value = "";
      cityRef.current.value = "";
    }
  }, [currentUser]);

  const handlerFormSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const age = ageRef.current.value;
    const city = cityRef.current.value;

    if (currentUser) {
      editUser(currentUser._id, { firstName, lastName, email, age, city });
    } else {
      addUser(firstName, lastName, email, age, city);
    }

    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    ageRef.current.value = "";
    cityRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handlerFormSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" ref={firstNameRef} />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" ref={lastNameRef} />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} />
        <br />
        <br />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" ref={ageRef} />
        <br />
        <br />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" ref={cityRef} />
        <br />
        <br />
        <SubmitBtn />
      </form>
    </>
  );
}

export default Form;
