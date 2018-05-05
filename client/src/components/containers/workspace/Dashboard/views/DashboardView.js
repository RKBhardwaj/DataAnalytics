import React from 'react';
import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import _ from 'lodash';
import TopNavBar from '../../../../shared/TopNavBar';
import TopNavActionItems from '../../../../shared/TopNavActionItems';
import Gridster from '../directives/grid';
import constants from '../../../../../common/constants';

const DashboardView = (props) => {
  const {
    panels,
    showTopNavActions,
    deleteDashboard,
    saveDashboard,
    addVisualization,
    showDashboardList,
    downloadDashboard,
    showDashboardInfo
  } = props;

  const moduleName = 'Dashboard';

  const dashboardContent = _.size(panels) > 0 ? (
    <Gridster
      panels={panels}
    />
  ) : (
    <div className="no-vis-container">
      <span>{constants.dashboard.NO_VIS_ADDED}</span>
    </div>
  );

  const showDarkTheme = false;
  const dashboardTheme = showDarkTheme ? 'dark-theme' : 'light-theme';
  const actionsItems = [
    { ...constants.common.LIST_ITEMS, action: showDashboardList },
    { ...constants.common.ADD_ITEM, action: addVisualization },
    { ...constants.common.SAVE_ITEM, action: saveDashboard },
    { ...constants.common.DOWNLOAD, action: downloadDashboard },
    { ...constants.common.DELETE_ITEM, action: deleteDashboard },
    { ...constants.common.HELP, action: showDashboardInfo },
  ];
  const topNavActions = showTopNavActions ? (
    <TopNavActionItems
      actionsItems={actionsItems}
    />
  ) : '';

  return (
    <div>
      <TopNavBar
        titleName={moduleName}
        topNavActions={topNavActions}
      />
      <Grid className={`dashboard-container ${dashboardTheme}`}>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {dashboardContent}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default DashboardView;
