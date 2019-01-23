/*
  Login Component
  Is rendered within the Navigation Bar
  - Is a Button pair when the user is not logged in
  - Is Username with logout button when user is logged in
*/

import React, { Component } from 'react';
import { Button, Modal, Form, Header, Grid } from 'semantic-ui-react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  ChangePopup = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const style = {
      "margin": "1em"
    };
    const { loggedIn, username } = this.props;
    const { open } = this.state;

    return (
      !loggedIn ?
        <Modal
          centered={true}
          trigger={
            <Button.Group>
              <Button onClick={this.ChangePopup}>Login</Button>
              <Button.Or />
              <Button onClick={this.ChangePopup}>Sign Up</Button>
            </Button.Group>
          }
          closeIcon={true}
          open={open}
          onClose={this.ChangePopup}
        >
          <Modal.Content>
            <Grid relaxed='very' columns='2' divided={true}>
              <Grid.Column>
                <Header style={style} as='h1' textAlign='center'>Sign Up</Header>
                <Form size='huge' style={style}>
                  <Form.Input label="Username" placeholder="Username" />
                  <Form.Input label="Password" placeholder="Password" />
                  <Form.Button>Sign Up</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Header style={style} as='h1' textAlign='center'>Login</Header>
                <Form size='huge' style={style}>
                  <Form.Input label="Username" placeholder="Username" />
                  <Form.Input label="Password" placeholder="Password" />
                  <Form.Button>Login</Form.Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        :
        <Button.Group>
          <Button>{username}</Button>
          <Button>Log Out</Button>
        </Button.Group>
    );
  }
}

export default Login;