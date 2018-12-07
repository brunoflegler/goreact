import React, { Fragment } from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;
