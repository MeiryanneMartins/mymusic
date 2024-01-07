import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues } from "./RegisterForm.data";
import "./RegisterForm.scss";

export function RegisterForm(props) {
  const { openRegister, goBack } = props;
  
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("Registro Ok");
      console.log(formValue);
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
          />

          <Form.Input
            name="password"
            type="password"
            placeholder="password"
            icon={
              <Icon
                name="eye"
                link
                onClick={() => console.log("Show Password")}
              />
            }
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Form.Input
            name="username"
            type="text"
            placeholder="how you like to be called?"
            icon="user circle outline"
            onChange={formik.handleChange}
            value={formik.values.username}  
          />

          <Form.Button type="submit" primary fluid>
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