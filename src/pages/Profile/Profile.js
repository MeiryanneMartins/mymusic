import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import {
  AvatarUpdate,
  DisplayNameUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm
} from "../../components/Profile";
import { BasicModal } from "../../components/Shared";
import { User } from "../../api";
import "./Profile.scss";

const userController = new User();

export function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const { displayName, email } = userController.getMe();

  const onCloseModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openForm = (type) => {
    if (type === "displayName") {
      setTitleModal("update name and nickname");
      setContentModal(<DisplayNameUpdateForm onClose={onCloseModal} />);
    }

    if (type === "email") {
      setTitleModal("update email");
      setContentModal(<EmailUpdateForm onClose={onCloseModal} />);
    }

    if (type === "password") {
      setTitleModal("update password");
      setContentModal(<PasswordUpdateForm onClose ={onCloseModal}/>);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <h1>Settings</h1>

        <div className="profile__block">
          <div>
            <AvatarUpdate />
            <span>{displayName}</span>
          </div>
          <Button onClick={() => openForm("displayName")}>
            update
          </Button>
        </div>

        <div className="profile__block">
          <span>Email: {email}</span>
          <Button onClick={() => openForm("email")}>
            update
          </Button>
        </div>

        <div className="profile__block">
          <span>Password: *** *** *** </span>
          <Button onClick={() => openForm("password")}>
            update
          </Button>
        </div>
      </div>

      <BasicModal
        show={showModal}
        onClose={onCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}