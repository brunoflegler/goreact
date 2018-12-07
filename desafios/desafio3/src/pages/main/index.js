import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { IconMarker } from './styles';

import GitList from '../gitlist';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -20.362143,
      longitude: -40.659312,
      zoom: 8,
    },
    markers: [
      {
        id: 1,
        latitude: -20.962143,
        longitude: -40.759312,
        url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      },
      {
        id: 2,
        latitude: -20.362243,
        longitude: -40.651312,
        url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
      },
    ],
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
    console.log(e);
  };

  render() {
    const { viewport, markers } = this.state;

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
          {markers
            && markers.map(m => (
              <Marker key={m.id} latitude={m.latitude} longitude={m.longitude}>
                <IconMarker alt="marker" src={m.url} />
              </Marker>
            ))}
        </MapGL>
      </Fragment>
    );
  }
}

export default Main;
