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
import ROUTES from '../../constants/routes';

const App = () => (
  <div className="appContainer">
    <Switch>
      <AppRoute exact path={ROUTES.INDEX} component={Home} />
      <AppRoute
        exact
        path={ROUTES.ABOUT}
        layout={EmptyLayout}
        component={Home}
      />
      <AppRoute
        exact
        path={ROUTES.TECHNOLOGIES.JS}
        layout={EmptyLayout}
        component={Home}
      />
      <AppRoute path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
