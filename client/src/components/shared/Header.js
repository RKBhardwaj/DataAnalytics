import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import SideNavigation from './SideNavigation';
import constants from '../../common/constants';
import { navigateToRoute } from '../../common/appUtils';


const Logged = (props) => {
  const right = 'right';
  const top = 'top';
  return (
    <IconMenu
      {...props}
      className="user-menu"
      iconButtonElement={
        <IconButton><ActionAccountCircle /></IconButton>
      }
      targetOrigin={{ horizontal: right, vertical: top }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onClick={() => navigateToRoute('/')} />
    </IconMenu>
  );
};

Logged.muiName = 'IconMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      open: false,
      leftIcon: <NavigationMenu />
    };
    this.toggleSideNavigation = this.toggleSideNavigation.bind(this);
  }

  toggleSideNavigation() {
    this.setState({
      open: !this.state.open
    });
    if (this.state.open) {
      this.setState({
        leftIcon: <NavigationMenu />
      });
    } else {
      this.setState({
        leftIcon: <NavigationArrowBack />
      });
    }
  }

  render() {
    return (
      <header>
        <AppBar
          className="header"
          title={constants.common.APP_TITLE}
          user={this.state.user}
          iconElementLeft={this.state.leftIcon}
          onLeftIconButtonClick={this.toggleSideNavigation}
          iconElementRight={<Logged />}
        />
        <SideNavigation
          appTitle={constants.common.APP_TITLE}
          open={this.state.open}
        />
      </header>
    );
  }
}

export default Header;
