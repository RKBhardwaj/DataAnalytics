import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import TopNavBar from '../../shared/TopNavBar';

import ReactGrid from '../../shared/ReactGrid';

const DashboardView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Dashboard';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row>
          <ReactGrid />
        </Row>
      </Grid>
    </div>
  );
};

export default DashboardView;
