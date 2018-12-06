import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as FavoritesAtions from '../../store/actions/favorites';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  static propTypes = {
    addFavorites: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  handleAddRepository = (e) => {
    e.preventDefault();

    const { addFavorites } = this.props;

    addFavorites();
  };

  onChangeInput = (e) => {
    e.preventDefault();

    this.setState({
      repositoryInput: e.target.value,
    });
  };

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={this.onChangeInput}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {favorites.map(f => (
            <li key={f.id}>
              <p>
                <strong>{f.name}</strong>
                <br />
                {f.description}
              </p>
              <a href={f.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesAtions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
