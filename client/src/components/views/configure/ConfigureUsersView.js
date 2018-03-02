import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const ConfigureUsersView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Users and Roles';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default ConfigureUsersView;
