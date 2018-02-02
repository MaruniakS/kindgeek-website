import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
