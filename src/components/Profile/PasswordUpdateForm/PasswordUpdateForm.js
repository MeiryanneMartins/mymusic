import React, { useState } from 'react';
import { Form } from "semantic-ui-react";

export function PasswordUpdateForm(props) {
  const { onClose } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);
  return (
    <Form>
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="password"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }} />

      <Form.Input
        name=" newPassword"
        type={showPassword ? "text" : "password"}
        placeholder="new password"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }} />

      <Form.Input
        name=" repeatNewPassword"
        type={showPassword ? "text" : "password"}
        placeholder="Repeat new password"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }} />

      <Form.Button type="submit" primary fluid>
        Update password
      </Form.Button>

    </Form>
  );
}
