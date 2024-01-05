import React from 'react';
import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export function AuthOptions(props) {
  const { openLogin, openRegister } = props;

  return (
    <div className="auth-options">
      <h1>Disconnect and just listen music</h1>

      <Button className="register" onClick={openRegister}>
        Register
        </Button>
      <Button className="login" onClick={openLogin}>
        Login
      </Button>
    </div>
  );
}