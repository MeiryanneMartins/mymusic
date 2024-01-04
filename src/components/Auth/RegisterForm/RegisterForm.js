import React from 'react';
import { Button } from 'semantic-ui-react';

export function RegisterForm(props) {
  const { openRegister, goBack } = props; 

  return (
    <div>
    <h1>RegisterForm</h1>
    <Button primary onClick={openRegister}>Register</Button>
    <Button secondary onClick={goBack}>Back</Button>
    </div>
  );
}