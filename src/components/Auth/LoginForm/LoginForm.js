import React, {useState} from "react";
import { Form, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from './LoginForm.data';
import "./LoginForm.scss";

export function LoginForm(props) {
  const { goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log("Send...");
      console.log(formValue);
    }
  });

  return (
    <div className="login-form">
      <h1>Free music</h1>
      
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
      name="mail"
      type="text"
      placeholder="email"
      icon="mail outline"
      onChange={formik.handleChange}
      value={formik.values.mail}
      error={formik.errors.mail}
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

      onChange={formik.handleChange}
      value={formik.values.password}
      error={formik.errors.password}
      />

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        SEND
      </Form.Button>

    </Form>
    <div className="login-form__options">
      <p onClick={goBack}>back</p>
    </div>
    </div>
  );
}