import React, {useState} from 'react';
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { BasicModal } from "../../Shared";
import "./LeftMenu.scss";


export function LeftMenu() {
  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const isCurrentpage = (route) => {
    return route === pathname
  }

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (type) => {
    if (type === "artist") {
      setContentModal("New artist");
      setContentModal(<p>Form new artist</p>)
    }

    if (type === "album") {
      setTitleModal("New album");
      setContentModal(<p>Form new album</p>)
    }

    if (type === "song") {
      setTitleModal("New song");
      setContentModal(<p>Form new song</p>)
    }

    setShowModal(true);
  };

  return (
    <>
    <div className="left-menu">
      <Menu secondary vertical fluid>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          icon="home"
          active={isCurrentpage("/")}
        />

        <Menu.Item
          as={Link}
          to="/artists"
          name="Artists"
          icon="users"
          active={isCurrentpage("/artists")}
        />

        <Menu.Item
          as={Link}
          to="/albums"
          name="Albums"
          icon="window maximize outline"
          active={isCurrentpage("/albums")}
        />
      </Menu>

      <Menu secondary vertical fluid>
        <Menu.Item
          name=" add new song"
          icon="plus"
          link
          onClick={() => openModal("song")}
        />

        <Menu.Item
          name="add new album?"
          icon="plus"
          link
          onClick={() => openModal("album")}
        />
        <Menu.Item
          name="add new artist"
          icon="plus"
          link
          onClick={() => openModal("artist")}
        />
      </Menu>
    </div>

    <BasicModal
      show={showModal}
      onClose={closeModal}
      title={titleModal}
      childen={contentModal}
    />
    </>
  );
}