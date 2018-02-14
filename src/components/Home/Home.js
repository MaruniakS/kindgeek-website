import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment, decrement } from '../../actions/actions';

class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage()}>
          Go to about page via redux
        </button>

        <p className="counter">{this.props.counter.value}</p>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about'),
      increment,
      decrement
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
