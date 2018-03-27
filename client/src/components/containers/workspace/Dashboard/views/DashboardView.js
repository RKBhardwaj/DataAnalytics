import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import TopNavBar from '../../../../shared/TopNavBar';
import Panel from '../../Dashboard/views/panels/panel';
import ReactGrid from '../../../../shared/ReactGrid';

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
          <Panel
            user={user}
            vizTitle="Hello"
          />
          <ReactGrid />
        </Row>
      </Grid>
    </div>
  );
};

export default DashboardView;
