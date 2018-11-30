import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './style.scss';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

class App extends Component {
  state = {
    posts: [
      {
        name: 'Bruno Flegler DalCol',
        date: 'Há 3min',
        description:
          'Lorem ipsum consequat tortor quis vel bibendum fusce himenaeos, mollis sociosqu amet dictumst molestie etiam pretium posuere molestie, suspendisse etiam conubia mi sapien porta aenean. euismod malesuada sociosqu at suspendisse vestibulum curabitur ultrices malesuada, ultricies euismod eros fusce per egestas integer massa quisque, pretium donec porta vitae at sagittis etiam. ',
      },
      {
        name: 'Bruno Flegler DalCol',
        date: 'Há 30min',
        description:
          'Lorem ipsum libero bibendum porta aenean pulvinar amet, mauris sit aenean dui per mattis, felis tempor curabitur scelerisque ipsuam luctus. ',
      },
      {
        name: 'Bruno Flegler DalCol',
        date: 'Há 50min',
        description:
          'Lorem ipsum egestas luctus accumsan ac aenean, duis tempor suspendisse elementum nostra nulla, curae pulvinar laoreet condimentum duis. ',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <Post posts={posts} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
