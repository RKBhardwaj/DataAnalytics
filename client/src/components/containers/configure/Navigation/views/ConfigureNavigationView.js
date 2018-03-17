import React from 'react';
import TopNavBar from '../../../../shared/TopNavBar';

const ConfigureNavigationView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Navigation';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default ConfigureNavigationView;
