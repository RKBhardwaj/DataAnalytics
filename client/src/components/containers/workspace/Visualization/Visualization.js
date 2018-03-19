import React, { Component } from 'react';
import { connect } from 'react-redux';

import VisualizationView from './views/VisualizationView';

@connect(store => ({
  user: store.LoginReducer.loginDetails,
  visualizations: store.VisualizationReducer.vizList
}))
class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      existingCharts: [],
      selectedChart: ''
    };

    this.chartSelectHandler = this.chartSelectHandler.bind(this);
    this.visSelectHandler = this.visSelectHandler.bind(this);
  }

  chartSelectHandler(evt, name) {
    this.setState({
      selectedChart: name
    });
  }

  visSelectHandler(evt) {
    this.setState({
      selectedChart: evt.target
    });
  }

  render() {
    return (
      <VisualizationView
        user={this.state.user}
        chartSelectHandler={this.chartSelectHandler}
        visSelectHandler={this.visSelectHandler}
        existingCharts={this.existingCharts}
      />
    );
  }
}

export default Visualization;
