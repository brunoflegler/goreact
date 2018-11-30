import React from 'react';
import PropTypes from 'prop-types';

/* export default class Button extends Component {
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
 */

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick} href="">
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
