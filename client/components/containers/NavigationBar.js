import React, { Component } from 'react';
import { Menu, Dropdown, Sticky, Input, Button, Icon } from 'semantic-ui-react';
import { GENRE_OPTIONS, FILTER_OPTIONS } from '../constants';
import Login from './Login';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      genre: [],
      filter: FILTER_OPTIONS[0]
    };
  }

  LimitGenres = (event, element) => {
    (element.value.length > 3) ? element.value.length = 3 : null;
    this.setState({ genre: element.value });
  }

  render() {
    const GenreItems = GENRE_OPTIONS.map((element) => {
      return { key: element, text: element, value: element };
    });

    const FilterItems = FILTER_OPTIONS.map((element) => {
      return { key: element, text: element, value: element };
    });
  
    return (
      <Sticky>
        <Menu inverted={true} size="huge" borderless={true}>
          <Menu.Item as="h1">MovieNerdz</Menu.Item>
          <Menu.Item position="right">
            <Menu.Item>
              <Dropdown
                defaultValue={FILTER_OPTIONS[0]}
                onChange={(event, element) => this.setState({ filter: element.value })}
                selection={true}
                button={true}
                options={FilterItems}>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown 
                text="Genres"
                value={this.state.genre} 
                search={true} 
                selection={true} 
                clearable={true}
                multiple={true}
                onChange={this.LimitGenres}
                options={GenreItems}>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Input
                onChange={(event, element) => this.setState({ keyword: element.value })}
                placeholder="Enter Keyword"
              />
            </Menu.Item>
            <Menu.Item>
              <Button icon={true} labelPosition='right'>
                Search
                <Icon name='search' />
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Login />
            </Menu.Item>
          </Menu.Item>
        </Menu>
      </Sticky>
    );
  }
}

export default NavigationBar;