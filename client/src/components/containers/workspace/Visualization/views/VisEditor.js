import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';

const VisEditor = (props) => {
  const {
    user,
    chartType,
    data,
    handleTabs,
    activeTab
  } = props;

  const moduleName = 'Visualization';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <AggEditor chartType={chartType} />
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} className="chart-container">
                <div className="chart">
                  <visualie data={data} />
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="response-container">
                <div className="responses">
                  <Tabs activeKey={activeTab} onSelect={handleTabs} id="app-settings">
                    <Tab eventKey="settings" title="Settings">
                      Settings
                    </Tab>
                    <Tab eventKey="navigation" title="Navigation">
                      Navigation
                    </Tab>
                  </Tabs>
                </div>  
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default VisEditor;