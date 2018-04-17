import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import _ from 'lodash';

import constants from '../../../../../common/constants';
import { PanelUtils } from '../panels/panel_utils';
import Panel from '../panels/panel';

const { DASHBOARD_VIEW_MODE, GRID_DIMENSIONS } = constants.dashboard;
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const generateLayout = panels => _.map(panels, (item, i) => {
  const id = i.toString();
  return {
    x: item.xPos,
    y: item.yPos,
    w: item.sizeX,
    h: item.sizeY,
    i: id,
  };
});

class Gridster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: 'lg',
      compactType: 'vertical',
      mounted: false,
      layouts: { lg: [] }
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.settingState();
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compType = oldCompactType === 'vertical' ? null : 'horizontal';
    const compactType = oldCompactType === 'horizontal' ? 'vertical' : compType;
    this.setState({ compactType });
  }

  onLayoutChange(layout, layouts) {
    this.settingState();
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout(this.props.panels) }
    });
  }

  settingState() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, (l, i) => (
      <Panel
        key={i}
        title="hello"
      />
    ));
  }

  render() {
    const defaultProps = {
      className: 'layout',
      rowHeight: 30,
      cols: GRID_DIMENSIONS.cols
    };
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} ({
            defaultProps.cols[this.state.currentBreakpoint]
          }{' '}
          columns)
        </div>
        <div>
          Compaction type:{' '}
          {_.capitalize(this.state.compactType) || 'No Compaction'}
        </div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default Gridster;
