import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../../redux/actions/categoryActions'

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  render() {
    return (
      <div>
        <h3>Category List </h3>
        <h2>Current Category: {this.props.currentCategory.categoryName}</h2>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem
              className={category.id === this.props.currentCategoryId ? 'list-group-item-primary' : ''}
              style={{ cursor: 'pointer' }}
              key={category.id}>
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>

      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(actionTypes.getCategories, dispatch),
      changeCategory: bindActionCreators(actionTypes.changeCategory, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
