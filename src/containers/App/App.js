import React from 'react';
import { Switch } from 'react-router-dom';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//import main styles
import '../../static/styles/core.css';

// Components/Containers/Layouts
import EmptyLayout from '../../layouts/EmptyLayout';
import AppRoute from '../AppRoute';
import Home from '../../components/Home';
import NotFound from '../../components/NotFound';

const App = () => (
  <div className="appContainer">
    <Switch>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/us" layout={EmptyLayout} component={Home} />
      <AppRoute path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
