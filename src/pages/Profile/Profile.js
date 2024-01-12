import React from 'react';
import { Button } from "semantic-ui-react";
import { User } from "../../api";
import "./Profile.scss";

const userController = new User();

export function Profile() {
  const { displayName, email } = userController.getMe();

  return (
    <div className="profile">
      <h1>Settings</h1>

      <div className="profile__block">
        <div>
          <p>AVATAR</p>
          <span>{ displayName }</span>
        </div>
        <Button onClick={() => console.log("update")}>
          update
        </Button>
      </div>

      <div className="profile__block">
        <span>Email: {email}</span>
        <Button onClick={() => console.log("update email")}>
          update
        </Button>
      </div>


      <div className="profile__block">
        <span>Password: *** *** *** </span>
        <Button onClick={() => console.log("update password")}>
          update
        </Button>
      </div>
    </div>
  );
}