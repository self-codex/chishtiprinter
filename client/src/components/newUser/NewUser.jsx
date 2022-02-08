import React, { useState } from "react";
import { Button } from "@mui/material";
import "./newUser.scss";

const NewUser = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    imgURL: "",
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="newUser">
      <h4>Add New Customer</h4>

      <form className="newUser__form" autoComplete="off">
        <div className="newUser__form__list">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="customer fullname..."
            value={newUser.name}
            onChange={handleUserData}
          />
        </div>
        <div className="newUser__form__list">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="customer email address..."
            value={newUser.email}
            onChange={handleUserData}
          />
        </div>
        <div className="newUser__form__list">
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="customer cell number..."
            value={newUser.phone}
            onChange={handleUserData}
          />
        </div>
        <div className="newUser__form__list">
          <label>address</label>
          <input
            type="text"
            name="address"
            placeholder="customer address..."
            value={newUser.address}
            onChange={handleUserData}
          />
        </div>

        <Button type="submit" variant="contained">
          add user
        </Button>
      </form>
    </div>
  );
};

export default NewUser;
