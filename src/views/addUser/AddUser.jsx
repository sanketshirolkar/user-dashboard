import React, { useState } from "react";
import "./addUser.css";
import Input from "../../components/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { increment, storeNewUser } from "../../redux/actions/users.actions";
import {
  getAllUsersList,
  getCount,
} from "../../redux/selectors/users.selector";

const AddUser = () => {
  const dispatch = useDispatch();
  const allUsersList = useSelector(getAllUsersList);
  let { newUser = [{ id: 1, name: "", email: "", address: "" }] } =
    allUsersList;
  const counterValue = useSelector(getCount);

  const handleChange = (name, e) => {
    let newUserObject = { ...allUsersList };
    newUser[counterValue] = {
      ...newUser[counterValue],
      [name]: e.target.value,
      id: counterValue + 1,
    };
    newUserObject = Object.assign({}, newUserObject, {
      newUser,
    });
    dispatch(storeNewUser(newUserObject));
  };

  const handleSubmit = () => {
    let newUserObject = { ...allUsersList };
    newUserObject = Object.assign({}, newUserObject, {
      newUser,
      count: counterValue + 1,
    });
    dispatch(storeNewUser(newUserObject));
    dispatch(increment());
  };

  return (
    <div className="addUser_container">
      <div className="input_container">
        <div className="form_container">
          <div className="title_container">Add User</div>
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => handleChange("name", e)}
            />
            <Input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={newUser.email}
              onChange={(e) => handleChange("email", e)}
            />
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={newUser.address}
              onChange={(e) => handleChange("address", e)}
            />
          </div>
          <button className="button_container" onClick={handleSubmit}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
