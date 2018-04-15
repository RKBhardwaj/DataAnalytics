import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import _ from 'lodash';

import constants from '../../../../../common/constants';
import { PanelUtils } from '../panels/panel_utils';
import Panel from '../panels/panel';

const { DASHBOARD_VIEW_MODE, GRID_DIMENSIONS } = constants.dashboard;

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Gridster = (props) => {
  const {
    dashboardViewMode,
    createChildUiState,
    onPanelRemoved,
    panels,
    getVisClickHandler,
    getVisBrushHandler,
    saveState,
    toggleExpand,
    dashboardObject,
    fixedDashboard,
    dashboardQuery,
    addUsageStatistics
  } = props;

  const panelsView = panels.map((panel, i) => (
    <Panel
      key={i}
      title={panel.title}
    />
  ));

  return (
    <ResponsiveReactGridLayout
      className="layout"
      layouts={GRID_DIMENSIONS.layout}
      breakpoints={GRID_DIMENSIONS.breakpoints}
      cols={GRID_DIMENSIONS.cols}
    >
      {panelsView}
    </ResponsiveReactGridLayout>
  );
};

export default Gridster;
