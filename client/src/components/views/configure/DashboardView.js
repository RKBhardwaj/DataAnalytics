import React from 'react';

import Header from '../../shared/Header';
import NavBar from '../../shared/NavBar';

const DashboardView = (props) => {
  const {
    user
  } = props;

  return (
    <div>
      <Header
        loggedInUser={user}
      />
      <NavBar />
    </div>
  );
};

export default DashboardView;
