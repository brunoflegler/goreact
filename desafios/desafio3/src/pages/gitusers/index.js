import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  GitUsersList, GitUser, Profile, Actions, ListEmpty,
} from './styles';

import { Creators as GitUsersActions } from '../../store/ducks/gitusers';

class GitUsers extends Component {
  state = {};

  static propTypes = {
    gitusers: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          login: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    removeGitUsersRequest: PropTypes.func.isRequired,
  };

  handleRemoveItem = (id) => {
    const { removeGitUsersRequest } = this.props;
    removeGitUsersRequest(id);
  };

  render() {
    const { gitusers } = this.props;
    return (
      <Fragment>
        <GitUsersList>
          {gitusers.data.length === 0 && <ListEmpty>Nenhum registro encontrado!</ListEmpty>}
          {gitusers.data.map(git => (
            <GitUser key={git.id}>
              <img src={git.url} alt="avatar" />
              <Profile>
                <h1>{git.name}</h1>
                <span>{git.login}</span>
              </Profile>
              <Actions>
                <button type="button" onClick={this.handleRemoveItem.bind(this, git.id)}>
                  <i className="fa fa-times-circle fa-lg delete-profile " />
                </button>
                <button type="button">
                  <i className="fa fa-angle-right fa-lg angle-profile" />
                </button>
              </Actions>
            </GitUser>
          ))}
        </GitUsersList>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gitusers: state.gitusers,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...GitUsersActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GitUsers);
