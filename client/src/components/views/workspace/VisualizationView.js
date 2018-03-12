import React from 'react';
import TopNavBar from '../../shared/TopNavBar';

const VisualizationView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Visualization';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default VisualizationView;
