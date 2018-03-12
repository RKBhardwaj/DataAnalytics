import React from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import TopNavBar from '../../shared/TopNavBar';

const AppSettingsView = (props) => {
  const {
    user,
    activeTab,
    handleTabs,
  } = props;

  const moduleName = 'Application Settings';

  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Tabs activeKey={activeTab} onSelect={handleTabs} id="app-settings">
              <Tab eventKey="settings" title="Settings">
                Settings
              </Tab>
              <Tab eventKey="navigation" title="Navigation">
                Navigation
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default AppSettingsView;
