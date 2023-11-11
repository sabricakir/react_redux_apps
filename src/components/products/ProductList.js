import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'

class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>
          <Badge color='warning'>Products</Badge>
          <Badge color='info'>{this.props.currentCategory.name}</Badge>
        </h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer
  }
}

export default connect(mapStateToProps)(ProductList)
