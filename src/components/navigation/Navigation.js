import React, { Component } from 'react'
import { Nav, NavItem, NavLink, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

export default class Navigation extends Component {
  state = {
    dropdownOpen: false
  }
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink href="#">
            Link
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} >
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
    )
  }
}
