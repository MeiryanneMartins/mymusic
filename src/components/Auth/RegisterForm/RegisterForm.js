import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import "./RegisterForm.scss";

export function RegisterForm(props) {
  const { openRegister, goBack } = props; 

  return (
    <div className="register-form">
      <h1>Make your register and enjoy</h1>
      
        <Form>

          <Form.Input
            type="text"
            placeholder="email"
            icon="mail outline"
            error={true}
          />

          <Form.Input
            type="password"
            placeholder="password"
            icon={
              <Icon
                name="eye"
                link
                onClick={() => console.log("Show Password")}
              />
            }
          />

          <Form.Input
            type="text"
            placeholder="how you like to be called?"
            icon="user circle outline"  
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