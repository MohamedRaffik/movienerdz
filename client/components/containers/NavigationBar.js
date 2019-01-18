import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home'  //
    };
  }
  render() {

    const { active } = this.state;

    return (
      <Menu>
        <Menu.Item name='home' active={'home' === active}>Home Feed</Menu.Item>
        <Menu.Item name='watchlater' active={'watchlater' === active}>Watch Later</Menu.Item>
        <Menu.Item name="fav" active={'fav' === active}>Favorites</Menu.Item>
      </Menu>
    );
  }
}

export default NavigationBar;