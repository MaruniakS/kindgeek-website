import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment, decrement, changeValue } from '../../actions/actions';

class Home extends React.Component {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
  }
  render() {
    return (
      <div className="homeContainer">
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage()}>
          Go to about page via redux
        </button>
        <input
          type="text"
          value={this.props.changeText.value}
          onChange={this._handleChange}
        />
        {this.props.changeText.value}
        <p className="counter">{this.props.counter.value}</p>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }

  _handleChange(e) {
    this.props.changeValue(e.target.value);
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about'),
      increment,
      decrement,
      changeValue
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    counter: state.counter,
    changeText: state.changeText
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
