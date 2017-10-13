import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Board from '../pages/Board';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/board/:boardId" component={Board} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
