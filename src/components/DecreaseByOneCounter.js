import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { decrementByOne } from '../redux/actions/counterAction';
import { connect } from 'react-redux';

class DecreaseByOneCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.decrementByOne()}> - 1 </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrementByOne: bindActionCreators(decrementByOne, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(DecreaseByOneCounter);

