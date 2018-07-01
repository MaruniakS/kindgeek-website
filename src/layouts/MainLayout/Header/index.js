import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PATHS from '../../../constants/paths';
import { MENU } from '../../../constants/menu';

import logo from './logo.svg';
import './Header.css';

class Header extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      subNavOpened: false,
      activeItem: null,
      subItems: []
    };

    this._onNavigate = this._onNavigate.bind(this);
  }
  render() {
    const menu = MENU.map((item, index) => {
      const isActive = index === this.state.activeItem;
      return (
        <li className={'nav-item ' + (isActive ? 'active' : '')} key={index}>
          <Link
            to={item.path || '#'}
            className={'nav-link ' + (item.classes || '')}
            onClick={this._onNavigate(item, index)}
          >
            {item.title}
            {item.children ? (
              <div className={'arrow ' + (isActive ? '' : 'collapsed')}>
                <span className="arrow__upper" />
                <span className="arrow__lower" />
              </div>
            ) : null}
          </Link>
        </li>
      );
    });
    const subMenu = this.state.subItems.map((subItem, subIndex) => {
      return (
        <li className="nav-item" key={subIndex}>
          <Link className="nav-link" to={subItem.path}>
            {subItem.title}
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
        <ul
          className={
            'navbar-nav ms-auto sub-nav ' +
            (this.state.subNavOpened ? 'active' : '')
          }
        >
          {subMenu}
        </ul>
      </div>
    );
  }

  _onNavigate(item, index) {
    return e => {
      e.preventDefault();
      // if it needs to interact with submenu
      if (item.children) {
        if (index === this.state.activeItem) {
          this.setState({
            subNavOpened: false,
            activeItem: null,
            subItems: []
          });
        } else {
          this.setState({
            subNavOpened: true,
            activeItem: index,
            subItems: item.children
          });
        }
        return;
      }
      // if it is anchor
      if (~item.path.indexOf('#')) {
        // if anchor is present
        if (document.querySelector(item.path)) {
          this.props.history.push(item.path);
        } else {
          // redirect to index page if not
          this.props.history.push('/' + item.path);
        }
      }
      // other pages
      this.props.history.push(item.path);
    };
  }
}

export default withRouter(Header);
