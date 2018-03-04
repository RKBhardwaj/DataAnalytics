import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const AppSettingsView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'App Settings';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default AppSettingsView;
