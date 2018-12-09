import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  GitList, GitItem, Profile, Actions,
} from './styles';

class GitHubList extends Component {
  state = {};

  static propTypes = {
    gitlist: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          login: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  };

  render() {
    const { gitlist } = this.props;
    return (
      <Fragment>
        <GitList>
          {gitlist.data.map(git => (
            <GitItem key={git.id}>
              <img src={git.url} alt="avatar" />
              <Profile>
                <h1>{git.name}</h1>
                <span>{git.login}</span>
              </Profile>
              <Actions>
                <button type="button">
                  <i className="fa fa-times-circle fa-lg delete-profile " />
                </button>
                <button type="button">
                  <i className="fa fa-angle-right fa-lg angle-profile" />
                </button>
              </Actions>
            </GitItem>
          ))}
        </GitList>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gitlist: state.gitlist,
});

export default connect(mapStateToProps)(GitHubList);
