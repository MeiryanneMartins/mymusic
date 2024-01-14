import React from "react";
import { Button } from "semantic-ui-react";
import { AvatarUpdate } from "../../components/Profile";
import { BasicModal } from "../../components/Shared";
import { User } from "../../api";
import "./Profile.scss";

const userController = new User();

export function Profile() {
  const { displayName, email } = userController.getMe();

  return (
    <>
    <div className="profile">
      <h1>Settings</h1>

      <div className="profile__block">
        <div>
          <AvatarUpdate />
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

    <BasicModal show={true} onClose={() => console.log("close modal")} title="update data" children={<h1>content modal</h1>} /> 
    </>
  );
}