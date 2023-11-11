import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { decrementByTwo } from '../redux/actions/counterAction';
import { connect } from 'react-redux';

class DecreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.decrementByTwo()}> - 2 </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    decrementByTwo: bindActionCreators(decrementByTwo, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(DecreaseByTwoCounter);
