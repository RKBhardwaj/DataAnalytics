import React from 'react';
import TopNavBar from '../../shared/TopNavBar';

const ConfigureCompanyView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Company Management';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default ConfigureCompanyView;
