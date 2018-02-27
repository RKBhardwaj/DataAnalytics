import React from 'react';
import AppBar from 'material-ui/AppBar';

import SideNavigation from './SideNavigation';
import constants from '../../common/constants';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      open: false
    };
    this.closeSideNavigation = this.closeSideNavigation.bind(this);
    this.openSideNavigation = this.openSideNavigation.bind(this);
  }

  closeSideNavigation() {
    this.setState({
      open: false
    });
  }

  openSideNavigation() {
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <header>
        <AppBar
          title={constants.common.APP_TITLE}
          user={this.state.user}
          onLeftIconButtonClick={this.openSideNavigation}
        />
        <SideNavigation
          appTitle={constants.common.APP_TITLE}
          open={this.state.open}
          closeSideNavigation={this.closeSideNavigation}
          openSideNavigation={this.openSideNavigation}
        />
      </header>
    );
  }
}

export default Header;
