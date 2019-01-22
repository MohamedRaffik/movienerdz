import React, { Component } from 'react';
import axios from 'axios';
import { Menu, Dropdown, Sticky, Input, Icon } from 'semantic-ui-react';
import { FILTER_OPTIONS } from '../constants';
import LoginApp from './LoginApp';
import { FILTER_ACTIONS } from '../../actions';
const { SEARCH } = FILTER_ACTIONS;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      genre: [],
      genres: []
    };
  }

  componentDidMount() {
    axios.get('/api/moviedata/genres')
      .then(res => {
        this.setState({ genres: res.data })
      })
      .catch(err => console.error(err));
  }

  ChangeFilter = (event, element) => {
    this.props.onChangeFilter(element.value);
  }

  Search = () => {
    const { onUpdateFeed, onChangeFilter } = this.props;
    const { keyword } = this.state;
    axios.get(`/api/moviedata/search/${keyword}`)
      .then(res => {
        onUpdateFeed(SEARCH, res.data);
        onChangeFilter(SEARCH);
      })
      .catch(err => console.error(err));
  }

  SearchGenres = (event, element) => {
    const { onUpdateFeed, onChangeFilter } = this.props;
    if (element.value.length >= 3) element.value.length = 3;
    this.setState({ genre: element.value }, () => {
      axios.post('/api/moviedata/genres', {
        genres: this.state.genre
      })
        .then(res => {
          onUpdateFeed(SEARCH, res.data);
          onChangeFilter(SEARCH);
        })
        .catch(err => console.error(err));
    });
  }

  render() {
    const { genres } = this.state;
    const GenreItems = genres.map((element) => {
      return { key: element.id, text: element.name, value: element.id };
    });

    const FilterItems = FILTER_OPTIONS.map((element) => {
      return { key: element[1], text: element[0], value: element[1] };
    });

    return (
      <Sticky>
        <Menu inverted={true} size="small" borderless={true}>
          <Menu.Item as="h1">MovieNerdz</Menu.Item>
          <Menu.Item position="right">
            <Menu.Item>
              <Dropdown
                defaultValue={FILTER_OPTIONS[0][1]}
                onChange={this.ChangeFilter}
                selection={true}
                button={true}
                options={FilterItems}>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Dropdown
                text="Search By Genres"
                search={true}
                selection={true}
                clearable={true}
                multiple={true}
                onChange={this.SearchGenres}
                options={GenreItems}>
              </Dropdown>
            </Menu.Item>
            <Menu.Item>
              <Input
                icon={<Icon name="search" link={true} onClick={this.Search} />}
                onChange={(event, element) => this.setState({ keyword: element.value })}
                placeholder="Enter Keyword"
              />
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