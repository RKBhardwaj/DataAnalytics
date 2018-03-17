import React, { Component } from 'react';
import { connect } from 'react-redux';

import DiscoverView from '../../views/workspace/DiscoverView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      showSideNav: true,
      selectedDataSource: 'Select Datasource',
      dataSourceList: []
    };
    this.changeDataSource = this.changeDataSource.bind(this);
    this.toggleSideNavigation = this.toggleSideNavigation.bind(this);
  }

  toggleSideNavigation() {
    this.setState({
      showSideNav: !this.state.showSideNav
    });
  }

  changeDataSource(event) {
    this.setState({
      selectedDataSource: event.key
    });
  }

  render() {
    return (
      <DiscoverView
        user={this.state.user}
        toggleSideNavigation={this.toggleSideNavigation}
        showSideNav={this.state.showSideNav}
        selectedDataSource={this.state.selectedDataSource}
        dataSourceList={this.state.dataSourceList}
        changeDataSource={this.changeDataSource}
      />
    );
  }
}

export default Discover;
