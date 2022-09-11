import React, { useState } from "react";
import "./addUser.css";
import Input from "../../components/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { storeNewUser } from "../../redux/actions/users.actions";
import { getAllUsersList } from "../../redux/selectors/users.selector";

const AddUser = () => {
  const dispatch = useDispatch();
  const allUsersList = useSelector(getAllUsersList);
  let { newUser = [{ name: "", email: "", address: "" }] } = allUsersList;
  const [userCount, setUserCount] = useState(0);

  const handleChange = (name, e) => {
    let newUserObject = { ...allUsersList };

    newUser[userCount] = { ...newUser[userCount], [name]: e.target.value };
    newUserObject = Object.assign({}, newUserObject, {
      newUser,
    });
    dispatch(storeNewUser(newUserObject));
  };

  console.log(allUsersList, "All Uers");

  const handleSubmit = () => {
    let newUserObject = { ...allUsersList };
    newUserObject = Object.assign({}, newUserObject, {
      newUser,
    });
    setUserCount((prevState) => prevState + 1);
    dispatch(storeNewUser(newUserObject));
  };

  return (
    <div className="addUser_container">
      <div className="input_container">
        <div className="form_container">
          <div className="title_container">Add User</div>
          {/* {newUser?.map((item, index) => ( */}
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
          {/* ))} */}
          <button className="button_container" onClick={handleSubmit}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
