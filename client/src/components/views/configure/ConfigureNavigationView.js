import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const ConfigureNavigationView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Navigation';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default ConfigureNavigationView;
