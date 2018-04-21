import React, { Component } from 'react';
import * as visContants from '../../../common/constants/visualization';

const Visualize = (props) => {
  const {
    viz,
    type,
    data
  } = props;

  const chartNotExist = (
    <div className="no-chart">
      {visContants.NO_VISUALIZATION}
    </div>
  );

  const chartExist = (
    <div className="is-chart">
      Chart loading
    </div>
  );

  const visualization = viz === '' ? chartNotExist : chartExist;

  return (
    <div className="chart">
      {visualization}
    </div>
  );
};

export default Visualize;
