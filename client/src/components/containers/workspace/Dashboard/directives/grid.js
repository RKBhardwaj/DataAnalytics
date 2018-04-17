import React, { Component } from 'react';
import _ from 'lodash';
import { PanelUtils } from '../panels/panel_utils';
import Panel from '../panels/panel';
import GridsterView from '../views/gridsterView';

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
      layouts: { lg: [] },
      items: []
    };
  }

  componentWillMount() {
    this.generateDOM();
  }

  generateDOM() {
    const layouts = generateLayout(this.props.panels);
    const items = _.map(layouts, (l, i) => (
      <Panel
        key={i}
        title={this.props.panels[i].title}
      />
    ));
    this.setState({
      layouts: { lg: layouts },
      items
    });
  }

  render() {
    return (
      <GridsterView
        items={this.state.items}
        layouts={this.state.layouts}
      />
    );
  }
}

export default Gridster;
