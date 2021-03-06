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
      signupError: '',
      loginError: ''
    }
  }

  ChangePopup = () => {
    this.setState({ open: !this.state.open, loginError: '', signupError: '' });
  }

  ChangeFeed = (filter) => {
    const { onChangeFilter } = this.props;
    onChangeFilter(filter);
  }

  LogOut = () => {
    const { onLoggedOut, onChangeFilter, filter } = this.props;
    axios.get('/api/auth/logout')
      .then(res => {
        onLoggedOut();
        this.setState({ open: false }, () => {
          if (filter === WATCH_LATER || filter === FAVORITES) onChangeFilter(TRENDING);
        });    
      })
      .catch(err => {});
  }

  Login = () => {
    this.setState({ loginError: '', signupError: '' }, () => {
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
          if (message.foundUser === false) this.setState({ loginError: 'Username does not exist' })
          else if (message.validPassword === false) this.setState({ loginError: 'Invalid Password' })
          else { this.setState({ loginError: message }) }
        });
    });
  }

  SignUp = () => {
    this.setState({ userExists: false, userNotFound: false, wrongPass: false }, () => {
      const { signupPass, signupUser } = this.state;
      if (signupUser === '') {
        this.setState({ signupError: 'Username must not be blank' });
      } else if (signupPass.length < 8) {
        this.setState({ signupError: 'Password must be greater than 8 characters' });
        return;
      }
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
          if (message.usernameExists) this.setState({ signupError: 'Username is Taken' })
        });
    });
  }

  render() {
    const style = {
      "margin": "1em",
      "color": "white",
    };
    const { loggedIn, username } = this.props;
    const { open, signupError, loginError } = this.state;

    const modalStyle = {
      background: "linear-gradient(to top left, rgba(24, 24, 24, 0.7 ), rgba(0,0,0,.4))",
      boxShadow: "0 0 100px 0 rgba(255, 255, 255, 0.6), 0 0px 20px 0 rgba(255, 255, 255, 0.2)",

    }
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
          <Modal.Content style={modalStyle}>
            <Grid relaxed='very' columns='2' divided={true}>
              <Grid.Column>
                <Header style={style} as='h1' textAlign='center'>Sign Up</Header>
                <Form size='huge' style={style} onSubmit={this.SignUp} error={Boolean(signupError)} >
                  {signupError ? <Message error={true} content={signupError} /> : null}
                  <Form.Input label="Username" placeholder="Username" onChange={(event) => this.setState({ signupUser: event.target.value })} />
                  <Form.Input label="Password" placeholder="Password" type="password" onChange={(event) => this.setState({ signupPass: event.target.value })} />
                  <Form.Button style={{ color: "black", fontWeight: "bold", borderRadius: "20px", backgroundColor: "white" }}>Sign Up</Form.Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Header style={style} as='h1' textAlign='center'>Login</Header>
                <Form size='huge' style={style} onSubmit={this.Login} error={Boolean(loginError)}>
                  {loginError ? <Message error={true} content={loginError} /> : null}
                  <Form.Input label="Username" placeholder="Username" onChange={(event) => this.setState({ loginUser: event.target.value })} />
                  <Form.Input label="Password" placeholder="Password" type="password" onChange={(event) => this.setState({ loginPass: event.target.value })} />
                  <Form.Button style={{ color: "black", fontWeight: "bold", borderRadius: "20px", backgroundColor: "white" }}>Login</Form.Button>
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