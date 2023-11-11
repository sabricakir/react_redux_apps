import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../../redux/actions/categoryActions'

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category)
  }

  render() {
    return (
      <div>
        <h2>
          <Badge color='warning'>Category List</Badge>
        </h2>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem
              className={category.id === this.props.currentCategory.id ? 'list-group-item-primary' : ''}
              style={{ cursor: 'pointer' }}
              key={category.id}
              onClick={() => this.selectCategory(category)}>
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
