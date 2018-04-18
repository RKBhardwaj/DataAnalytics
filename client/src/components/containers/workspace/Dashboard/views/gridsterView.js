import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import constants from '../../../../../common/constants';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const { DASHBOARD_VIEW_MODE, GRID_DIMENSIONS } = constants.dashboard;

const GridsterView = (props) => {
  const {
    items,
    layouts
  } = props;

  return (
    <ResponsiveReactGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={GRID_DIMENSIONS.breakpoints}
      cols={GRID_DIMENSIONS.cols}
    >
      {items}
    </ResponsiveReactGridLayout>
  );
};

export default GridsterView;
