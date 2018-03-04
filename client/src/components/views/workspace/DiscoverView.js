import React from 'react';
import Header from '../../shared/Header';
import TopNavBar from '../../shared/TopNavBar';

const DiscoverView = (props) => {
  const {
    user
  } = props;

  const moduleName = 'Discover';

  return (
    <div>
      <Header loggedInUser={user} />
      <TopNavBar titleName={moduleName} />
    </div>
  );
};

export default DiscoverView;
