import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Board from '../pages/Board';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/board" exact component={Board} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
