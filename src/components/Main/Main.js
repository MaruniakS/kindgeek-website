import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from '../Home';
import './Main.css';

const Main = props => (
    <main className='mainContainer'>
        <Route exact path="/" component={Home} />
    </main>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Main);
