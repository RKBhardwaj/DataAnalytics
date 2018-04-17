import React from 'react';

import PanelHeader from './panel-header';

const Panel = (props) => {
  const {
    key,
    title
  } = props;

  const gridCls = 'react-grid-item react-draggable cssTransforms react-resizable';

  return (
    <div className={`${gridCls}`} key={key}>
      <PanelHeader
        title={title}
      />
    </div>
  );
};

export default Panel;
