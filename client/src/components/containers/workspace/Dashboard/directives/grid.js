import React, { Component } from 'react';
import _ from 'lodash';
import { PanelUtils } from '../panels/panel_utils';
import Panel from '../panels/panel';
import GridsterView from '../views/gridsterView';
import constants from '../../../../../common/constants';

const { DASHBOARD_VIEW_MODE, GRID_DIMENSIONS } = constants.dashboard;

const generateLayout = panels => _.map(panels, (item, i, list) => {
  const id = i.toString();
  return {
    x: item.xPos,
    y: item.yPos,
    w: item.sizeX,
    h: item.sizeY,
    i: id,
    title: item.title,
    add: i === (list.length - 1).toString()
  };
});

class Gridster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: generateLayout(this.props.panels),
      breakpoint: '',
      className: 'layout',
      cols: {
        lg: 12, md: 10, sm: 6, xs: 4, xxs: 2
      },
      newCounter: 0
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint,
      cols
    });
  }

  onAddItem() {
    this.setState({
      items: this.state.items.concat({
        i: `{'n'${this.state.newCounter}`,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity,
        w: 2,
        h: 2
      }),
      newCounter: this.state.newCounter + 1
    });
  }

  onRemoveItem(i) {
    this.setState({ items: _.reject(this.state.items, { i }) });
  }

  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    const i = el.add ? '+' : el.i;
    return (
      <div data-grid={el} key={i}>
        <Panel
          ele={el}
          onRemoveItem={this.onRemoveItem}
        />
      </div>
    );
  }

  render() {
    const {
      items,
      layouts,
      breakpoint,
      cols,
      className
    } = this.state;
    return (
      <GridsterView
        items={_.map(items, el => this.createElement(el))}
        breakpoint={breakpoint}
        cols={cols}
        className={className}
        onBreakpointChange={this.onBreakpointChange}
      />
    );
  }
}

export default Gridster;
