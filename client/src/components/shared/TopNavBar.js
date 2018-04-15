import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const TopNavBar = (props) => {
  const {
    titleName,
    actionsItems,
    options
  } = props;

  const navigationItems = actionsItems.map((action, i) => (
    <NavItem key={i} eventKey={action} href="#">
      {action.title}
    </NavItem>
  ));

  const DropdownList = options.map((option, i) => (
    <MenuItem key={i} eventKey={option}>Action</MenuItem>
  ));

  const NavigationDropdown = options.length > 0 ? (
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      {DropdownList}
    </NavDropdown>
  ) : '';

  const Navigations = actionsItems.length > 0 || options.length > 0 ? (
    <Nav>
      {navigationItems}
      {NavigationDropdown}
    </Nav>
  ) : '';

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {titleName}
        </Navbar.Brand>
      </Navbar.Header>
      {Navigations}
    </Navbar>
  );
};

export default TopNavBar;
