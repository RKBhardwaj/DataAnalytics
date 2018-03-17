import React, { Component } from 'react';
import { connect } from 'react-redux';

import VisualizationView from '../../views/workspace/VisualizationView';

@connect(store => ({
  user: store.LoginReducer.loginDetails
}))
class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    return (
      <VisualizationView
        user={this.state.user}
      />
    );
  }
}

export default Visualization;
