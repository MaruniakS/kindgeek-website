import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment, decrement, changeValue } from '../../actions/actions';
import { Example } from './Example/Example';

class Home extends React.Component {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
  }

  componentWillMount(props) {
    console.log('in will mount', props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('in receive', nextProps);
  }

  shouldComponentUpdate() {
    console.log('should update');
    return true;
  }

  componentWillUpdate(currentState, nextState) {
    console.log('in will update');
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
        <p
          className="counter"
          ref={node => {
            this.counter = node;
          }}
        >
          {this.props.counter.value}
        </p>
        <Example onLog={this._log}>1232323213123</Example>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('in did mount');
    console.log(this.counter);
  }

  componentDidUpdate(currentState, previousState) {
    console.log('in did update');
  }

  componentWillUnmount() {}

  _log() {
    console.log(this.counter);
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
    ...state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
