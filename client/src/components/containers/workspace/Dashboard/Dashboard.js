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
      LoginUserDetails: props.user,
      dashboardViewMode: 'edit',
      createChildUiState: {},
      onPanelRemoved: {},
      panels: [{
        title: 'title 1',
        positionX: 1,
        positionY: 1,
        sizeX: 6,
        sizeY: 6
      }, {
        title: 'title 2',
        positionX: 7,
        positionY: 1,
        sizeX: 6,
        sizeY: 6
      }],
      saveState: {},
      dashboardObject: {},
      fixedDashboard: [],
      dashboardQuery: '',
      addUsageStatistics: ''
    };

    this.getVisClickHandler = this.getVisClickHandler.bind(this);
    this.getVisBrushHandler = this.getVisBrushHandler.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  getVisClickHandler() {
    this.props.dispatch();
  }

  getVisBrushHandler() {
    this.props.dispatch();
  }

  toggleExpand() {
    this.props.dispatch();
  }

  render() {
    const {
      LoginUserDetails,
      dashboardViewMode,
      createChildUiState,
      onPanelRemoved,
      panels,
      saveState,
      dashboardObject,
      fixedDashboard,
      dashboardQuery,
      addUsageStatistics
    } = this.state;
    return (
      <DashboardView
        user={LoginUserDetails}
        dashboardViewMode={dashboardViewMode}
        createChildUiState={createChildUiState}
        onPanelRemoved={onPanelRemoved}
        panels={panels}
        getVisClickHandler={this.getVisClickHandler}
        getVisBrushHandler={this.getVisBrushHandler}
        saveState={saveState}
        toggleExpand={this.toggleExpand}
        dashboardObject={dashboardObject}
        fixedDashboard={fixedDashboard}
        dashboardQuery={dashboardQuery}
        addUsageStatistics={addUsageStatistics}
      />
    );
  }
}

export default Dashboard;
