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
    this.toggleSideNavigation = this.toggleSideNavigation.bind(this);
  }

  toggleSideNavigation() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <header>
        <AppBar
          title={constants.common.APP_TITLE}
          user={this.state.user}
          onLeftIconButtonClick={this.toggleSideNavigation}
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
