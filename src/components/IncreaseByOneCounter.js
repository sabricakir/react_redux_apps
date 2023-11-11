import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { incrementByOne } from '../redux/actions/counterAction';
import { connect } from 'react-redux';

class IncreaseByOneCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementByOne()}> + 1 </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementByOne: bindActionCreators(incrementByOne, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(IncreaseByOneCounter);