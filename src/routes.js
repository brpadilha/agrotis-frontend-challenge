import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Situacao from './pages/Situacao';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/situacao" component={Situacao} />
    </Switch>
  );
}
