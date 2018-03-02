import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const VisualizationView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Visualization';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default VisualizationView;
