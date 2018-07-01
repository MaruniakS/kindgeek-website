import React from 'react';
import { Link } from 'react-router-dom';
import PATHS from '../../../constants/paths';
import { MENU } from '../../../constants/menu';

import logo from './logo.svg';
import './Header.css';

class Header extends React.PureComponent {
  render() {
    const menu = MENU.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <Link to={'#'} className={'nav-link ' + (item.classes || '')}>
            {item.title}
          </Link>
        </li>
      );
    });
    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
          <Link to={PATHS.INDEX} className="navbar-brand">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">{menu}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
