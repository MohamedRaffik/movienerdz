import React, { Component } from 'react';
import { Menu, Dropdown, Sticky, Input, Button, Divider } from 'semantic-ui-react';
import { GENRE_OPTIONS, FILTER_OPTIONS } from '../constants';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: [],
      filter: FILTER_OPTIONS[0]
    };
  }

  render() {
    const GenreItems = [];
    GENRE_OPTIONS.forEach((element) => {
      GenreItems.push({ key: element, text: element, value: element });
    });

    const FilterItems = []
    FILTER_OPTIONS.forEach((element) => {
      FilterItems.push({ key: element, text: element, value: element });
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
                  text="Search by Genre" 
                  search={true} 
                  selection={true} 
                  clearable={true}
                  multiple={true}
                  onChange={(event, element) => this.setState({ genre: element.value })}
                  options={GenreItems}>
                </Dropdown>
              </Menu.Item>
              <Menu.Item>
                <Input
                  onChange={(event, element) => this.setState({ title: element.value })}
                  placeholder="Search By Title"
                  icon={{ name: 'search', link: true }}
                />
              </Menu.Item>
            </Menu.Item>
          </Menu>
      </Sticky>
    );
  }
}

export default NavigationBar;