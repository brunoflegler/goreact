import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from 'react-modal';
import { IconMarker, FormAdd, StyledModal } from './styles';

import GitList from '../gitlist';
import { Creators as GitListActions } from '../../store/ducks/gitlist';

import { Creators as MainActions } from '../../store/ducks/main';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -20.362143,
      longitude: -40.659312,
      zoom: 8,
    },
    userGithub: '',
    latitude: 0,
    longitude: 0,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;

    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleOnViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  handleMapClick = (e) => {
    this.setState({
      userGithub: '',
    });

    const [latitude, longitude] = e.lngLat;

    this.setState({
      latitude,
      longitude,
    });

    this.handleOpenModal();
  };

  handleOpenModal = () => {
    const { openModal } = this.props;
    openModal();
  };

  handleCloseModal = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  userGithubChange = (e) => {
    e.preventDefault();

    this.setState({
      userGithub: e.target.value,
    });
  };

  handleSearchGitHub = (e) => {
    e.preventDefault();

    const { userGithub, latitude, longitude } = this.state;
    const { addGitListRequest } = this.props;

    if (!userGithub) return;

    addGitListRequest({
      latitude,
      longitude,
      userGithub,
    });
  };

  render() {
    const { viewport, userGithub } = this.state;
    const { gitlist, main } = this.props;

    return (
      <Fragment>
        <GitList />
        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          captureClick
          onViewportChange={this.handleOnViewportChange}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiYnJ1bm9kYWxjb2wyOCIsImEiOiJjanBlNm8wdnMwYmNiM3JrMjVkbzRlMzBiIn0.eSKFw-AgDNk_3kutIPcqKg"
        >
          {gitlist.data
            && gitlist.data.map(m => (
              <Marker key={m.id} latitude={m.latitude} longitude={m.longitude}>
                <IconMarker alt="marker" src={m.url} />
              </Marker>
            ))}
        </MapGL>

        <Modal style={StyledModal} isOpen={main.modalIsOpen} onRequestClose={this.handleCloseModal}>
          <FormAdd onSubmit={this.handleSearchGitHub}>
            <h1>Adicionar novo usuário</h1>
            <form>
              <input
                type="text"
                placeholder="Usuário do GitHub"
                value={userGithub}
                onChange={this.userGithubChange}
              />
              <div>
                <button onClick={this.handleCloseModal} className="btn-cancel" type="button">
                  Cancelar
                </button>
                <button className="btn-save" type="submit">
                  Salvar
                </button>
              </div>
            </form>
          </FormAdd>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  gitlist: state.gitlist,
  main: state.main,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...GitListActions,
    ...MainActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
