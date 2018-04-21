import React from 'react';

import PanelHeader from './panel-header';
import Visualize from '../../../../shared/visualize/Visualize';

const Panel = (props) => {
  const {
    ele,
    onRemoveItem,
  } = props;

  return (
    <div className="panel">
      <PanelHeader
        key={ele}
        title={ele.title}
        onRemoveItem={onRemoveItem}
      />
      <Visualize
        viz=""
        type=""
        data={[]}
      />
    </div>
  );
};

export default Panel;
