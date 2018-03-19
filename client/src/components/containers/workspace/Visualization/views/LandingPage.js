import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { VISUALIZE_TYPES } from '../visualize_constants';
import SavedObjectFinder from '../../../../shared/courier/saved-object-finder';

const LandingPage = (props) => {
  const {
    user,
    chartSelectHandler,
    visSelectHandler,
    existingCharts
  } = props;

  const VisualizationTypes = VISUALIZE_TYPES.map(type => (
    <li key={type.key}>
      <button onClick={evt => chartSelectHandler(evt, type.key)}>
        <i className={`fa ${type.icon}`} /> {type.title}
      </button>
    </li>
  ));

  return (
    <Grid className="visualization-container">
      <Row className="visualization-landing-page">
        <Col lg={6} md={6} sm={12} xs={12}>
          <h3>Create new Visualization</h3>
          <div className="visualization-list">
            <ul>
              {VisualizationTypes}
            </ul>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h3>Or, Select Visualization</h3>
          <SavedObjectFinder
            name="visualization"
            id="visualization-finder"
            title="Select Visualiztion"
            selectHandler={evt => visSelectHandler(evt)}
            objectList={existingCharts}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default LandingPage;
