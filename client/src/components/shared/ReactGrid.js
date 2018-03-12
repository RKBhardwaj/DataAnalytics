import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const layouts = [
  {
    i: 'a', x: 0, y: 0, w: 1, h: 2, static: true
  }, {
    i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4
  }, {
    i: 'c', x: 4, y: 0, w: 1, h: 2
  }
];

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoints: {
        lg: 1200,
        md: 996,
        sm: 768,
        xs: 480,
        xxs: 0
      },
      cols: {
        lg: 12,
        md: 10,
        sm: 6,
        xs: 4,
        xxs: 2
      },
      layout: {
        lg: layouts,
        md: layouts,
        sm: layouts,
        xs: layouts,
        xxs: layouts
      }
    };
  }

  render() {
    return (
      <ResponsiveReactGridLayout
        className="layout"
        layouts={this.state.layout}
        breakpoints={this.state.breakpoints}
        cols={this.state.cols}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ResponsiveReactGridLayout>
    );
  }
}

export default Grid;

