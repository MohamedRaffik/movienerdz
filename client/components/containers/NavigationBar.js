import React, { Component } from 'react';
import { Menu, Dropdown, Sticky, Input, Button, Icon } from 'semantic-ui-react';
import { GENRE_OPTIONS, FILTER_OPTIONS } from '../constants';
import LoginApp from './LoginApp';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      genre: [],
    };
  }

  ChangeFilter = (event, element) => {
    this.props.onChangeFilter(element.value);
  }

  LimitGenres = (event, element) => {
    if (element.value.length > 3) element.value.length = 3;
    this.setState({ genre: element.value });
  }

  render() {
    const GenreItems = GENRE_OPTIONS.map((element) => {
      return { key: element, text: element, value: element };
    });

    const FilterItems = FILTER_OPTIONS.map((element) => {
      return { key: element, text: element[0], value: element[1] };
    });

    return (
      <Sticky>
        <Menu inverted={true} size="medium" borderless={true}>
          <Menu.Item as="h1">MovieNerdz</Menu.Item>
          <Menu.Item position="right">
            <Menu.Item>
              <Dropdown
                defaultValue={FILTER_OPTIONS[0][0]}
                onChange={this.ChangeFilter}
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
              <LoginApp />
            </Menu.Item>
          </Menu.Item>
        </Menu>
      </Sticky>
    );
  }
}

export default NavigationBar;