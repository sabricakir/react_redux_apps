import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { incrementByTwo } from '../redux/actions/counterAction';
import { connect } from 'react-redux';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementByTwo()}> + 2 </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementByTwo: bindActionCreators(incrementByTwo, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(IncreaseByTwoCounter);
