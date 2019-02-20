import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  Container, Header, SongList, SongItem,
} from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Creators as PlayerActions } from '../../store/ducks/player';

import Loading from '../../components/Loading';

class Playlist extends Component {
  static propTypes = {
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        thumbnail: PropTypes.string,
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            author: PropTypes.string,
            album: PropTypes.string,
            file: PropTypes.string,
          }),
        ),
      }).isRequired,
    }).isRequired,
    setLoad: PropTypes.func.isRequired,
    current: PropTypes.shape({
      id: PropTypes.number,
    }),
  };

  static defaultProps = {
    current: null,
  };

  state = {
    selected: null,
  };

  componentDidMount() {
    this.loadplayListDetails();
  }

  componentDidUpdate(prevProps) {
    const {
      match: { params },
    } = this.props;

    const {
      match: { params: prevParams },
    } = prevProps;

    if (prevParams.id !== params.id) {
      this.loadplayListDetails();
    }
  }

  loadplayListDetails = () => {
    const {
      getPlaylistDetailsRequest,
      match: { params },
    } = this.props;

    getPlaylistDetailsRequest(params.id);
  };

  renderDetails = () => {
    const { playlistDetails, setLoad, current } = this.props;

    const { selected } = this.state;

    return (
      <Container>
        <Header>
          <img src={playlistDetails.data.thumbnail} alt="playlist" />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlistDetails.data.title}</h1>
            <p>
              {playlistDetails.data.songs && playlistDetails.data.songs.length}
              {' música(s)'}
            </p>
            <button
              onClick={() => setLoad(playlistDetails.data.songs[0], playlistDetails.data.songs)}
              disabled={playlistDetails.data.songs && playlistDetails.data.songs.length === 0}
              type="button"
            >
              PLAY
            </button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="Duração" />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlistDetails.data.songs && playlistDetails.data.songs.length > 0 ? (
              playlistDetails.data.songs.map(s => (
                <SongItem
                  selected={selected === s.id}
                  playing={current && current.id === s.id}
                  key={s.id}
                  onClick={() => this.setState({ selected: s.id })}
                  onDoubleClick={() => setLoad(s, playlistDetails.data.songs)}
                >
                  <td>
                    <img src={PlusIcon} alt="Adicionar Playlist" />
                  </td>
                  <td>{s.title}</td>
                  <td>{s.author}</td>
                  <td>{s.album}</td>
                  <td>3:26</td>
                </SongItem>
              ))
            ) : (
              <SongItem>
                <td colSpan={5}>Nenhuma música encontrada</td>
              </SongItem>
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { playlistDetails } = this.props;

    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  current: state.player.current,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
