/*
  Login Component
  Is rendered within the Navigation Bar
  - Is a Button pair when the user is not logged in
  - Is Username with logout button when user is logged in
*/

import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Login extends Component {
  render() {
    const { loggedIn, username } = this.props;

    return (
      !loggedIn ? 
        <Button.Group>
          <Button>Log In</Button>
          <Button.Or />
          <Button>Sign Up</Button>
        </Button.Group>
      : 
        <Button.Group>
          <Button>{username}</Button>
          <Button>Log Out</Button>
        </Button.Group>
    );
  }
}

export default Login;