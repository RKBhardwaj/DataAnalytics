import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const ConfigureCompanyView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Company Management';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default ConfigureCompanyView;
