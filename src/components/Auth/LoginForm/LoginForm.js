import React, {useState} from "react";
import { Form, Icon } from "semantic-ui-react";
import "./LoginForm.scss";

export function LoginForm(props) {
  const { goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <div className="login-form">
      <h1>Free music</h1>
    <Form>
      <Form.Input
      name="mail"
      type="text"
      placeholder="email"
      icon="mail outline"
      />

      <Form.Input
      name="password"
      type={showPassword ? "text" : "password"}
      placeholder="password"
      icon={
        <Icon
        name={showPassword ? "eye slash" : "eye"}
        link
        onClick={onShowHidenPassword}
        />
      }
      />

      <Form.Button type="submit" primary fluid>
        SEND
      </Form.Button>

    </Form>
    <div className="login-form__options">
      <p onClick={goBack}>back</p>
    </div>
    </div>
  );
}