import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Header = props => (
    <div>
        <h1>Header</h1>
        <p>Welcome home!</p>
        <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Header);
