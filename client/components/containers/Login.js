import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Login extends Component {
  render() {
    return (
      <Button.Group>
        <Button>Log In</Button>
        <Button.Or />
        <Button>Sign Up</Button>
      </Button.Group>
    );
  }
}

export default Login;