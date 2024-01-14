import React, { useState } from 'react';
import { Form } from "semantic-ui-react";

export function EmailUpdateForm() {
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <Form>
      <Form.Input name="email" placeholder="new email" />
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="password"
        icon={{
          name: showPassword ? "eye slash" : "eye",
          link: true,
          onClick: onShowHidenPassword,
        }}
      />

      <Form.Button type="submit" fluid primary>
        update email
      </Form.Button>
    </Form>
  );
}
