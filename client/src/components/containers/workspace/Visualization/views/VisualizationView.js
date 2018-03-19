import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LandingPage from './LandingPage';
import TopNavBar from '../../../../shared/TopNavBar';
import AggEditor from '../../../../shared/visualize/AggEditor';
import visualie from '../../../../shared/visualize/visualize';

const VisualizationView = (props) => {
  const {
    user,
    chartType,
    data,
    handleTabs,
    activeTab,
    chartSelectHandler,
    visSelectHandler,
    existingCharts
  } = props;

  const moduleName = 'Visualization';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <LandingPage
        user={user}
        chartSelectHandler={chartSelectHandler}
        visSelectHandler={visSelectHandler}
        existingCharts={existingCharts}
      />
    </div>
  );
};

export default VisualizationView;
