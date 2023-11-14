import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import CartSummary from '../cart/CartSummary'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <Nav tabs className='d-flex justify-content-end'>
        <NavItem>
          <NavLink>
            <Link to='/' className='text-decoration-none'> Home </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to='/products' className='text-decoration-none'> Add New Product </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <CartSummary />
        </NavItem>
      </Nav>
    )
  }
}
