import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import TopNavBar from '../../../../shared/TopNavBar';
import Gridster from '../directives/grid';
import * as dashConstant from '../../../../../common/constants/dashboard';

const DashboardView = (props) => {
  const {
    panels,
    actionsItems
  } = props;

  const moduleName = 'Dashboard';

  const dashboardContent = _.size(panels) > 0 ? (
    <Gridster
      panels={panels}
    />
  ) : (
    <div className="no-vis-container">
      <span>{dashConstant.NO_VIS_ADDED}</span>
    </div>
  );

  const showDarkTheme = false;
  const dashboardTheme = showDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div>
      <TopNavBar
        titleName={moduleName}
        actionsItems={actionsItems}
        options={[]}
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
