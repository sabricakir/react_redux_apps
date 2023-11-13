import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Cart from './Cart'

export default class Navigation extends Component {
  render() {
    return (
      <Nav tabs className='d-flex justify-content-end'>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <Cart />
        </NavItem>
      </Nav>
    )
  }
}
