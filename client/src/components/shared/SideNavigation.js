import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';

import { navigateToRoute } from '../../common/appUtils';
import constants from '../../common/constants';

const SideNavigation = (props) => {
  const {
    open,
    closeSideNavigation,
    appTitle
  } = props;

  const Navigation = (
    constants.navigation.NAVIGATION_LIST.map((nav) => {
      const menuText = nav.text.toUpperCase();
      return (
        <MenuItem
          key={nav.key}
          onClick={() => navigateToRoute(nav.navigateTo)}
        >
          {menuText}
        </MenuItem>
      );
    })
  );

  const isDocked = true;
  const drawerWidth = 300;

  return (
    <Drawer docked={isDocked} width={drawerWidth} open={open}>
      <AppBar
        title={appTitle}
        onLeftIconButtonClick={closeSideNavigation}
        onTitleClick={closeSideNavigation}
      />
      <div>
        {Navigation}
      </div>
    </Drawer>
  );
};

export default SideNavigation;
