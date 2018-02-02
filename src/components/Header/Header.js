import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Header = props => <header>Header</header>;

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Header);
