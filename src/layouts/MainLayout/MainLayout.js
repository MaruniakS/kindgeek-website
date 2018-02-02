import React from 'react';
import Header from '../../components/Header';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        {this.props.children}
        {/*Footer*/}
      </div>
    );
  }
}

export default MainLayout;
