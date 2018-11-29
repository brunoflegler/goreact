import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button onClick={this.props.onClick} href="">
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  state = {
    count: 0
  };

  handleOnclick = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  render() {
    return (
      <Fragment>
        <h1>{this.state.count}</h1>
        <Button onClick={this.handleOnclick} title="Enviar">
          Enviar
        </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
