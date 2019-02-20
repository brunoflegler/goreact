import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browser from '../pages/browser';
import Playlist from '../pages/playlist';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Browser} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Router;
