import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const FooterComponent = props => <footer>Footer</footer>;

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const Footer = connect(null, mapDispatchToProps)(FooterComponent);

export default Footer;
