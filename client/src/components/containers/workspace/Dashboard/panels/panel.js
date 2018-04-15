import React from 'react';

import PanelHeader from './panel-header';

const Panel = (props) => {
  const {
    title
  } = props;

  return (
    <div className="panel">
      <PanelHeader
        title={title}
      />
    </div>
  );
};

export default Panel;
