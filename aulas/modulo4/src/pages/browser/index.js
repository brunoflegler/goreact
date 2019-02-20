import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
  Container, Title, List, Playlist,
} from './styles';

import Loading from '../../components/Loading';

class Browser extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlist: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;

    getPlaylistsRequest();
  }

  render() {
    const { playlist } = this.props;

    return (
      <Container>
        <Title>
          {'Navegar '}
          {playlist.loading && <Loading />}
        </Title>

        <List>
          {playlist.data.map(p => (
            <Playlist key={p.id} to={`/playlists/${p.id}`}>
              <img src={p.thumbnail} alt={p.title} />
              <strong>{p.title}</strong>
              <p>{p.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browser);
