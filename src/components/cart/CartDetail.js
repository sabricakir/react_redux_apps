import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'
import { Table } from 'reactstrap';
import alertify from 'alertifyjs'

class CartDetail extends Component {
  removeItemFromCart = (item) => {
    this.props.actions.removeFromCart({ id: item.product.id })
    alertify.error(`${item.product.productName} removed from cart!`)
  }

  renderEmpty = () => {
    return (
      <div>
        <h2 className='text-info text-center'>Cart is empty!</h2>
      </div>
    )
  }

  renderCart = () => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(item => (
              <tr key={item.product.id}>
                <td>{item.product.id}</td>
                <td>{item.product.categoryId}</td>
                <td>{item.product.productName}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => this.removeItemFromCart(item)} className='btn btn-danger'>Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);