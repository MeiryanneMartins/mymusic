import React, { useState } from 'react';
import {AuthOptions, RegisterForm, LoginForm} from "../../components/Auth";
import "./Auth.scss";

export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  const openLogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => { 
    if (typeForm === "login") {
      return <LoginForm openLogin={openLogin} goBack={goBack} />;
    }

    if (typeForm === "register") {
      return <RegisterForm openRegister={openRegister} goBack={goBack}/>;
    }

    return <AuthOptions openLogin={openLogin} openRegister={openRegister}/>;
  };

  return <div>{renderForm()}</div>;
}