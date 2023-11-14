import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActionTypes from '../../redux/actions/productActions'
import * as cartActionTypes from '../../redux/actions/cartActions'
import { Table, Button } from 'reactstrap'
import alertify from 'alertifyjs'
import { Link } from 'react-router-dom'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts()
  }

  addItemToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.success(`${product.productName} added to cart!`)
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
                <td><Link to={'/products/' + product.id}>{product.productName}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color='success' onClick={() => this.addItemToCart(product)}>Add to cart</Button></td>
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
      getProducts: bindActionCreators(productActionTypes.getProducts, dispatch),
      addToCart: bindActionCreators(cartActionTypes.addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
