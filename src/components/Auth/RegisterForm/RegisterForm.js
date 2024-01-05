import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

export function RegisterForm(props) {
  const { openRegister, goBack } = props; 

  return (
    <div className="register-form">
      <h1>Make your register and enjoy</h1>
      
        <Form>

          <Form.Input
            type="text"
            placeholder="email"
            icon="mail ouline"
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
            placeholder="How you like to be called?"
            icon="user circle outline"  
          />

          <Form.Button type="submit" primary fluid>
            Send
          </Form.Button>

        </Form>
    </div>
  );
}