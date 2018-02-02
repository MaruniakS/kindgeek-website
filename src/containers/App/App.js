import React from 'react';
import Main from '../../components/Main';
import Header from '../../components/Header';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//import main styles
import '../../styles/core.css';

const App = () => (
    <div className='appContainer'>
        <Header />
        <Main />
    </div>
);

export default App;
