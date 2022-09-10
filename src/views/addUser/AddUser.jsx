import React, { useState } from "react";
import "./addUser.css";
import Input from "../../components/input/Input";
import { useSelector, useDispatch } from "react-redux";
import { storeNewUser } from "../../redux/actions/users.actions";
import { getAllUsersList } from "../../redux/selectors/users.selector";

//import Checkbox from "../../components/checkbox/Checkbox";

const AddUser = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const allUsersList = useSelector(getAllUsersList);
  const dispatch = useDispatch();

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

  const handleSubmit = (userDetails) => {
    let addNewUserObject = { ...allUsersList };
    addNewUserObject = Object.assign({}, addNewUserObject, {
      newUser: userDetails,
    });
    dispatch(storeNewUser(addNewUserObject));
  };

  console.log(allUsersList, "HIIIII");

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
            type="email"
            name="email"
            placeholder="E-Mail"
            value={userDetails?.email}
            onChange={handleOnChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={userDetails?.address}
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
          <button
            className="button_container"
            onClick={handleSubmit(userDetails)}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
