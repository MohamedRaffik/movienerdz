/*
  Navigation Bar component 
  Performs Axios calls to the backend server when the user searchs by title or by genre
  Upon mounting a list of genres are retrieved from the backend server to give options to the user [Stored in genres]
  States:
    - keyword - search text in the input of the nav bar
    - genre - array of genre ids that represent the genres that are selected by the user
  Allows user to switch through filters
    - Trending 
    - Upcoming
    - Top Rated
    - Popular
*/

import React, { Component } from 'react';
import axios from 'axios';
import { Menu, Dropdown, Sticky, Input, Icon, Form, Image } from 'semantic-ui-react';
import LoginApp from './LoginApp';
import { FILTER_ACTIONS, updateGenre } from '../../actions';
const { TRENDING, UPCOMING, POPULAR, TOP_RATED, SEARCH, WATCH_LATER, FAVORITES } = FILTER_ACTIONS;
import Logo from '../../Images/mn1.png'

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
      .then(res => this.setState({ genres: res.data }))
      .catch(err => console.error(err));
  }

  ChangeFilter = (event, element) => {
    const { filter, onUpdateFeed } = this.props;
    if (filter !== SEARCH) {
      const feeds = [
        [TRENDING, 'trending'],
        [UPCOMING, 'upcoming'],
        [TOP_RATED, 'top_rated'],
        [POPULAR, 'popular'],
      ];
      let feed;
      feeds.forEach((element) => feed = (element[0] === filter) ? element[1] : feed);
      axios.get(`/api/moviedata/${feed}/1`)
        .then(res => onUpdateFeed(filter, res.data))
        .catch(err => console.log(err));
    }
    this.props.onChangeFilter(element.value);
  }

  Search = () => {
    const { onUpdateFeed, onChangeFilter, onUpdateKeyword, onUpdateGenre } = this.props;
    const keyword = (this.state.keyword !== '') ? this.state.keyword : ' ';
    onUpdateGenre([], []);
    onUpdateKeyword(keyword);
    axios.get(`/api/moviedata/search/${keyword}/1`)
      .then(res => {
        onUpdateFeed(SEARCH, res.data);
        onChangeFilter(SEARCH);
      })
      .catch(err => console.error(err));
  }

  SearchGenres = (event, element) => {
    const { onUpdateFeed, onChangeFilter, onUpdateGenre } = this.props;
    if (element.value.length === 0) return;
    else if (element.value.length >= 3) element.value.length = 3;
    this.setState({ genre: element.value }, () => {
      let genre_keywords = []
      this.state.genres.map((element) => {
        if (this.state.genre.indexOf(element.id) > -1) genre_keywords.push(element.name);
      });
      onUpdateGenre(this.state.genre, genre_keywords);
      axios.post('/api/moviedata/genres/1', {
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
    const filter_options = [
      ['Show Trending Movies', TRENDING],
      ['Show Upcoming Movies', UPCOMING],
      ['Show Popular Movies', POPULAR],
      ['Show Top Rated Movies', TOP_RATED]
    ];
    const { genres } = this.state;

    const GenreItems = genres.map((element) => {
      return { key: element.id, text: element.name, value: element.id };
    });

    const FilterItems = filter_options.map((element) => {
      return { key: element[1], text: element[0], value: element[1] };
    });

    return (
      <Sticky>
        <Menu inverted={true} size="small" borderless={true}>
          <Menu.Item>
            <Image src={Logo} style={{ height: "700", width: "150px", marginLeft: "50px" }}></Image>
          </Menu.Item>
          <Menu.Item position="right">
            <Menu.Item>
              <Dropdown
                defaultValue={filter_options[0][1]}
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
              <Form onSubmit={this.Search}>
                <Form.Field>
                  <Input
                    icon={<Icon name="search" link={true} onClick={this.Search} />}
                    onChange={(event, element) => this.setState({ keyword: element.value })}
                    placeholder="Enter Keyword"
                  />
                </Form.Field>
              </Form>
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