import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import Loading from '../Loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlist: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.title,
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
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="/">Rádio</Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <Link to="/">Seu Daily Mix</Link>
            </li>
            <li>
              <Link to="/">Tocadas recentemente</Link>
            </li>
            <li>
              <Link to="/">Músicas</Link>
            </li>
            <li>
              <Link to="/">Álbuns</Link>
            </li>
            <li>
              <Link to="/">Artistas</Link>
            </li>
            <li>
              <Link to="/">Estações</Link>
            </li>
            <li>
              <Link to="/">Arquivos locais</Link>
            </li>
            <li>
              <Link to="/">Vídeos</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Playlists</span>
              {playlist.loading && <Loading />}
            </li>
            {playlist.data.map(p => (
              <li key={p.id}>
                <Link to={`/playlists/${p.id}`}>{p.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
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
)(Sidebar);
