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

    this.addVisualization = this.addVisualization.bind(this);
    this.saveDashboard = this.saveDashboard.bind(this);
    this.deleteDashboard = this.deleteDashboard.bind(this);
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

  deleteDashboard() {
    this.props.dispatch();
  }

  render() {
    const {
      panels,
      actionsItems
    } = this.state;
    return (
      <DashboardView
        panels={panels}
        showTopNavActions="true"
        deleteDashboard={this.deleteDashboard}
        saveDashboard={this.saveDashboard}
        addVisualization={this.addVisualization}
      />
    );
  }
}

export default Dashboard;
