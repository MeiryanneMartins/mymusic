import React, { useState } from 'react';
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { BasicModal } from "../../Shared";
import { NewArtistForm } from "../../Artist";
import { NewAlbumForm } from "../../Album";
import { NewSongForm } from '../../Song/NewSongForm';
import "./LeftMenu.scss";


export function LeftMenu() {
  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const isCurrentpage = (route) => {
    return route === pathname
  };

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (type) => {

    if (type === "artist") {
      setTitleModal("New artist");
      setContentModal(<NewArtistForm onClose={closeModal} />);
    }

    if (type === "album") {
      setTitleModal("New album");
      setContentModal(<NewAlbumForm onClose={closeModal} />);  
    }

    if (type === "song") {
      setTitleModal("New song");
      setContentModal(<NewSongForm onClose={closeModal}/>)
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
      children={contentModal}
    />
    </>
  );
}