import React, { useState } from "react";
import "./addUser.css";
import Input from "../../components/input/Input";
//import Checkbox from "../../components/checkbox/Checkbox";

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  // const [checkedOne, setCheckedOne] = React.useState(true);
  // const [checkedTwo, setCheckedTwo] = React.useState(false);

  // const handleChangeOne = () => {
  //   setCheckedOne((prevState) => !prevState);
  // };

  // const handleChangeTwo = () => {
  //   setCheckedTwo((prevState) => !prevState);
  // };

  const handleOnChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {};

  return (
    <div className="addUser_container">
      <div className="input_container">
        <div className="form_container">
          <div className="title_container">Add User</div>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={userDetails?.name}
            onChange={handleOnChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails?.password}
            onChange={handleOnChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={userDetails?.email}
            onChange={handleOnChange}
          />
          {/* <Checkbox
            label="Value 1"
            checked={checkedOne}
            onChange={handleChangeOne}
            name="hobby 1"
            value="Table Tennis"
          />
          <Checkbox
            label="Value 2"
            checked={checkedTwo}
            onChange={handleChangeTwo}
            name="hobby 2"
            value="Cricket"
          /> */}
          <button className="button_container" onClick={handleSubmit}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
