import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import TopNavBar from '../../../../shared/TopNavBar';
import Gridster from '../directives/grid';

const DashboardView = (props) => {
  const {
    user,
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

  const moduleName = 'Dashboard';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row>
          <Gridster
            dashboardViewMode={dashboardViewMode}
            createChildUiState={createChildUiState}
            onPanelRemoved={onPanelRemoved}
            panels={panels}
            getVisClickHandler={getVisClickHandler}
            getVisBrushHandler={getVisBrushHandler}
            saveState={saveState}
            toggleExpand={toggleExpand}
            dashboardObject={dashboardObject}
            fixedDashboard={fixedDashboard}
            dashboardQuery={dashboardQuery}
            addUsageStatistics={addUsageStatistics}
          />
        </Row>
      </Grid>
    </div>
  );
};

export default DashboardView;
