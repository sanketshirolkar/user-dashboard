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

  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  console.log(newUser?.name);

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
    // setFormErrors(validate(newUser[0]));
    let newUserObject = { ...allUsersList };
    newUserObject = Object.assign({}, newUserObject, {
      newUser,
      count: counterValue + 1,
    });
    dispatch(storeNewUser(newUserObject));
    dispatch(increment());
    alert("User Added Successfully");
  };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     errors.name = "Name is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.address) {
  //     errors.address = "Address is required";
  //   } else if (values.address.length < 4) {
  //     errors.address = "Address must be more than 4 characters";
  //   } else if (values.address.length > 20) {
  //     errors.address = "Address cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <div className="addUser_container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="ui message success">Signed in successfully</div>
      )} */}

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
            {/* <p>{formErrors.name}</p> */}
            <Input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={newUser.email}
              onChange={(e) => handleChange("email", e)}
            />
            {/* <p>{formErrors.email}</p> */}
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={newUser.address}
              onChange={(e) => handleChange("address", e)}
            />
            {/* <p>{formErrors.address}</p> */}
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
