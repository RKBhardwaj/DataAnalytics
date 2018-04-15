import React from 'react';

import PanelHeader from './panel-header';

const Panel = (props) => {
  const {
    user,
    vizTitle
  } = props;

  return (
    <div className="panel">
      <PanelHeader
        vizTitle={vizTitle}
      />
    </div>
  );
};

export default Panel;
