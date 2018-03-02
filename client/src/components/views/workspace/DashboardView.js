import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const DashboardView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Dashboard';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default DashboardView;
