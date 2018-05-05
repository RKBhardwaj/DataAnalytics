import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const TopNavBar = (props) => {
  const {
    titleName,
    topNavActions
  } = props;

  return (
    <div className="navigation-bar">
      <div className="navigation-title">
        {titleName}
      </div>
      <div className="navigation-items">
        {topNavActions}
      </div>
    </div>
  );
};

export default TopNavBar;
