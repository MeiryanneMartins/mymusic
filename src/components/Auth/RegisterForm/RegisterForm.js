import React, { useState }from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./RegisterForm.data";
import "./RegisterForm.scss";

const auth = new Auth();

export function RegisterForm(props) {
  const { openRegister, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue.email, formValue.password);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="register-form">
      <h1>Make your register and enjoy</h1>
      
        <Form onSubmit={formik.handleSubmit}>

          <Form.Input
            name="email"
            type="text"
            placeholder="email"
            icon="mail outline"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
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

          <Form.Input
            name="username"
            type="text"
            placeholder="how you like to be called?"
            icon="user circle outline"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.errors.username}  
          />

          <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
            send
          </Form.Button>

        </Form>

        <div className="register-form__options">
          <p onClick={goBack}>back</p>
          <p>
            have account? <span onClick={openRegister}>go</span>
          </p>
        </div>
    </div>
  );
}