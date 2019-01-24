/*
  Login Component
  Is rendered within the Navigation Bar
  - Is a Button pair when the user is not logged in
  - Is Username with logout button when user is logged in
*/

import React, { Component } from 'react';
import { Button, Modal, Form, Header, Grid, Dropdown, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loginUser: '',
      loginPass: '',
      signupUser: '',
      signupPass: ''
    }
  }

  ChangePopup = () => {
    this.setState({ open: !this.state.open });
  }

  LogOut = () => {
    const { onLoggedOut } = this.props;
    onLoggedOut();
    this.setState({ open: false });
  }

  Login = () => {
    const { loginPass, loginUser } = this.state;
    axios.post('/api/auth/login', {
      username: loginUser,
      password: loginPass
    })
      .then(res => {
        const { onLoggedIn } = this.props;
        const { data } = res;
        onLoggedIn(data.username, (data.watch_later) ? data.watch_later : [], (data.favorites) ? data.favorites : []);
      })
      .catch(err => console.error(err));
  }

  SignUp = () => {
    const { signupPass, signupUser } = this.state;
    axios.post('/api/auth/signup', {
      username: signupUser,
      password: signupPass
    })
      .then(res => {
        const { onSignedUp } = this.props;
        const { data } = res;
        onSignedUp(data.username);
      })
      .catch(err => console.error(err));
  }

  render() {
    const style = {
      "margin": "1em",
      "zIndex": "99"
    };
    const { loggedIn, username } = this.props;
    const { open } = this.state;
    console.log(username);

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
                <Form size='huge' style={style} onSubmit={this.SignUp}>
                  <Form.Input label="Username" placeholder="Username" onChange={(event) => this.setState({ signupUser: event.target.value })} />
                  <Form.Input label="Password" placeholder="Password" type="password" onChange={(event) => this.setState({ signupPass: event.target.value })} />
                  <Form.Button>Sign Up</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Header style={style} as='h1' textAlign='center'>Login</Header>
                <Form size='huge' style={style} onSubmit={this.Login}>
                  <Form.Input label="Username" placeholder="Username" onChange={(event) => this.setState({ loginUser: event.target.value })} />
                  <Form.Input label="Password" placeholder="Password" type="password" onChange={(event) => this.setState({ loginPass: event.target.value })} />
                  <Form.Button>Login</Form.Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        :
        <Segment size='tiny' style={{backgroundColor: "inherit"}}>
          <Dropdown style={style} text={username} pointing={true} simple={true} button={true}>
            <Dropdown.Menu>
              <Dropdown.Item>Show Favorites</Dropdown.Item>
              <Dropdown.Item>Show Watch Later</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={this.LogOut}>Log Out</Button>
        </Segment>
    );
  }
}

export default Login;