import React from 'react';
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import "./LeftMenu.scss";


export function LeftMenu() {
  const { pathname } = useLocation();

  const isCurrentpage = (route) => {
    return route === pathname
  }

  return (
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
          onClick={() => console.log("upload music")}
        />

        <Menu.Item
          name="add new album?"
          icon="plus"
          link
          onClick={() => console.log("upload album")}
        />
        <Menu.Item
          name="add new music?"
          icon="plus"
          link
          onClick={() => console.log("upload music")}
        />
      </Menu>
    </div>
  );
}