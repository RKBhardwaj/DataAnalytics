import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardView from './views/DashboardView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panels: [],
      actionsItems: [],
      dashboard: {}
    };
  }

  addVisualization(title) {
    const { panels } = this.state;
    panels.push({
      title
    });

    this.setState({
      panels
    });
  }

  saveDashboard() {
    const { dashboard } = this.state;
    dashboard.title = '';
    dashboard.companyId = '';
    dashboard.option.showDarkTheme = false;
    dashboard.panels = this.state.panels;
    this.props.dispatch(this.state.dashboard);
  }

  render() {
    const {
      panels,
      actionsItems
    } = this.state;
    return (
      <DashboardView
        panels={panels}
        actionsItems={actionsItems}
      />
    );
  }
}

export default Dashboard;
