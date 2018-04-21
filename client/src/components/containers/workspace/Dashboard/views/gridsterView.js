import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridsterView = (props) => {
  const {
    items,
    onBreakpointChange
  } = props;

  return (
    <ResponsiveReactGridLayout
      {...props}
      onBreakpointChange={onBreakpointChange}
    >
      {items}
    </ResponsiveReactGridLayout>
  );
};

export default GridsterView;
