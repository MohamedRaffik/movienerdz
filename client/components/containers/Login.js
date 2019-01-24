/*
  Login Component
  Is rendered within the Navigation Bar
  - Is a Button pair when the user is not logged in
  - Is Username with logout button when user is logged in
*/

import React, { Component } from 'react';
import { Button, Modal, Form, Header, Grid, Dropdown, Segment, Message } from 'semantic-ui-react';
import { FILTER_ACTIONS } from '../../actions';
const { WATCH_LATER, FAVORITES, TRENDING } = FILTER_ACTIONS;
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loginUser: '',
      loginPass: '',
      signupUser: '',
      signupPass: '',
      userExists: false,
      userNotFound: false,
      wrongPass: false
    }
  }

  ChangePopup = () => {
    this.setState({ open: !this.state.open, userExists: false, userNotFound: false, wrongPass: false });
  }

  ChangeFeed = (filter) => {
    const { onChangeFilter } = this.props;
    onChangeFilter(filter);
  }

  LogOut = () => {
    const { onLoggedOut, onChangeFilter, filter } = this.props;
    onLoggedOut();
    this.setState({ open: false }, () => {
      if (filter === WATCH_LATER || filter === FAVORITES) onChangeFilter(TRENDING);
    });
  }

  Login = () => {
    this.setState({ userExists: false, userNotFound: false, wrongPass: false }, () => {
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
        .catch(err => {
          const { message } = err.response.data;
          if (message.foundUser === false) this.setState({ userNotFound: true })
          else if (message.validPassword === false) this.setState({ wrongPass: true })
        });
    });
  }

  SignUp = () => {
    this.setState({ userExists: false, userNotFound: false, wrongPass: false }, () => {
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
        .catch(err => {
          const { message } = err.response.data;
          if (message.usernameExists) this.setState({ userExists: true })
        });
    });
  }

  render() {
    const style = {
      "margin": "1em",
    };
    const { loggedIn, username } = this.props;
    const { open, userNotFound, userExists, wrongPass } = this.state;

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
                <Form size='huge' style={style} onSubmit={this.SignUp} error={userExists}>
                  <Form.Input label="Username" placeholder="Username" onChange={(event) => this.setState({ signupUser: event.target.value })} />
                  {userExists ? <Message error={true} content="Username Is Taken" /> : null}
                  <Form.Input label="Password" placeholder="Password" type="password" onChange={(event) => this.setState({ signupPass: event.target.value })} />
                  <Form.Button>Sign Up</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Header style={style} as='h1' textAlign='center'>Login</Header>
                <Form size='huge' style={style} onSubmit={this.Login} error={userNotFound || wrongPass}>
                  <Form.Input label="Username" placeholder="Username" onChange={(event) => this.setState({ loginUser: event.target.value })} />
                  {userNotFound ? <Message error={true} content="Username Not Found" /> : null}
                  <Form.Input label="Password" placeholder="Password" type="password" onChange={(event) => this.setState({ loginPass: event.target.value })} />
                  {wrongPass ? <Message error={true} content="Incorrect Password" /> : null}
                  <Form.Button>Login</Form.Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Modal.Content>
        </Modal>
        :
        <Segment size='tiny' style={{ backgroundColor: "inherit" }}>
          <Dropdown text={username} pointing={true} button={true}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.ChangeFeed(FAVORITES)}>Show Favorites</Dropdown.Item>
              <Dropdown.Item onClick={() => this.ChangeFeed(WATCH_LATER)}>Show Watch Later</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={this.LogOut}>Log Out</Button>
        </Segment>
    );
  }
}

export default Login;