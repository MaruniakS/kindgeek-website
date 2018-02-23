import React from 'react';
import PropTypes from 'prop-types';

export class Example extends React.Component {
  render() {
    this.props.onLog();
    return [
      <div className="example" key="1">
        {this.props.children}
      </div>,
      <div className="example-2" key="2">
        {this.props.text}
      </div>
    ];
  }
}

Example.defaultProps = {
  text: '222'
};

Example.propTypes = {
  text: PropTypes.string.isRequired
};
