import React, { Component } from 'react'
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Badge, Button, NavLink } from 'reactstrap';
import { connect } from 'react-redux';

class Cart extends Component {
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  renderEmpty = () => {
    return (
      <NavLink>Cart is empty</NavLink>
    )
  }

  renderSummary = () => {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} >
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Cart</DropdownItem>
          {this.props.cart.map(item => (
            <DropdownItem key={item.product.id} className='d-flex justify-content-between'>
              <div className='d-flex'>
                <p>{item.product.productName} <span className='text-danger'>${item.product.unitPrice}</span> </p>
                <p className='ms-2'>
                  <Badge color="success" pill>
                    x{item.quantity}
                  </Badge>
                </p>
              </div>
              <div className='ms-2'>
                <Button color='danger' size='sm'>Remove</Button>
              </div>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  }
}


export default connect(mapStateToProps)(Cart);