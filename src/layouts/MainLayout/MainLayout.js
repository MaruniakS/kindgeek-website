import React from 'react';
import Header from './Header';
import Footer from '../../components/Footer';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="main-layout">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
