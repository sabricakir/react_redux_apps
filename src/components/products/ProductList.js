import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActionTypes from '../../redux/actions/productActions'
import { Table, Button } from 'reactstrap'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  }

  render() {
    return (
      <div>
        <h2>
          <Badge color='warning'>Products</Badge>

          <Badge color='info'>{this.props.currentCategory.name}</Badge>
        </h2>

        <Table borderless>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button>Add to cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActionTypes.getProducts, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
