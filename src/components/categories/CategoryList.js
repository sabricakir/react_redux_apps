import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActionTypes from '../../redux/actions/categoryActions'
import * as productActionTypes from '../../redux/actions/productActions'

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category.id)
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
      getCategories: bindActionCreators(categoryActionTypes.getCategories, dispatch),
      changeCategory: bindActionCreators(categoryActionTypes.changeCategory, dispatch),
      getProducts: bindActionCreators(productActionTypes.getProducts, dispatch),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
