import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </Fragment>
  </Provider>
);

export default App;
