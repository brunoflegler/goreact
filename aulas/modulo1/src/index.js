import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends Component {
  state = {
    count: 0,
  };

  handleOnclick = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <Fragment>
        <h1>{count}</h1>
        <Button onClick={this.handleOnclick} title="Enviar">
          Enviar
        </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
