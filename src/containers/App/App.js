import React from 'react';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//import main styles
import '../../static/styles/core.css';

import AppRoute from '../AppRoute';
import ROUTES from '../../constants/routes';

const App = () => (
  <div className="appContainer">
    <Helmet>
      <title> React Application </title>
      <meta charSet="utf-8" />
      <meta name="description" content="test1" />
    </Helmet>
    <Switch>
      {ROUTES.map((route, index) => {
        return <AppRoute key={index} {...route} />;
      })}
    </Switch>
  </div>
);

export default App;
