import React from 'react';
import Main from '../../components/Main';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//import main styles
import '../../static/styles/core.css';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import EmptyLayout from '../../layouts/EmptyLayout/EmptyLayout';
import Empty from '../../components/Empty';

const App = () => (
  <div className="appContainer">
    <MainLayout>
      <Main />
    </MainLayout>
    <EmptyLayout>
      <Empty />
    </EmptyLayout>
  </div>
);

export default App;
