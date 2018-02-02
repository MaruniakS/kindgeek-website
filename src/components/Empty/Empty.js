import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import './Empty.css';

const Empty = props => (
  <main className="mainContainer">
    <Switch>
      <Route exact path="/us" component={Home} />
    </Switch>
  </main>
);

export default Empty;
