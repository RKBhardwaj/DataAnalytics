import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';

import { navigateToRoute } from '../../common/appUtils';
import constants from '../../common/constants';

const SideNavigation = (props) => {
  const {
    open,
    closeSideNavigation,
    handleNestedListToggle
  } = props;

  const handleNavigation = (link) => {
    closeSideNavigation();
    navigateToRoute(link);
  };

  const getNestedItems = (id, items) => {
    const sid = id;
    return items.map((item) => {
      const menuText = item.primaryText.toUpperCase();
      return (
        <ListItem
          key={item.id}
          primaryText={menuText}
          leftIcon={item.leftIcon}
          onClick={() => handleNavigation(item.link)}
        />
      );
    });
  };

  const navigation = (
    constants.navigation.NAVIGATION_LIST.map((nav) => {
      const menuText = nav.primaryText.toUpperCase();
      const nestedChilds = getNestedItems(nav.id, nav.nestedItems);
      return (
        <ListItem
          key={nav.id}
          primaryText={menuText}
          leftIcon={nav.leftIcon}
          initiallyOpen={nav.initiallyOpen}
          primaryTogglesNestedList={nav.primaryTogglesNestedList}
          nestedItems={nestedChilds}
        />
      );
    })
  );

  const isDocked = true;
  const drawerWidth = 300;

  return (
    <Drawer className="side-navigation" docked={isDocked} width={drawerWidth} open={open}>
      <List>
        {navigation}
      </List>
    </Drawer>
  );
};

export default SideNavigation;
