import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import TopNavBar from '../../../../shared/TopNavBar';

const ConfigureCompanyView = (props) => {
  const {
    user,
    companyName,
    shortName,
    dataSource,
    timeConfiguration
  } = props;

  const moduleName = 'Company Management';
  const isDisabled = true;
  return (
    <div>
      <TopNavBar titleName={moduleName} />
      <Grid>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={3} md={3} sm={12} xs={12}>
                <h4>Company Name</h4>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <TextField
                  id="companyName"
                  value={companyName}
                  disabled={isDisabled}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={3} sm={12} xs={12}>
                <h4>Short Name</h4>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <TextField
                  id="shortName"
                  value={shortName}
                  disabled={isDisabled}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={3} md={3} sm={12} xs={12}>
                <h4>Data Source</h4>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <TextField
                  id="dataSource"
                  value={dataSource}
                  disabled={isDisabled}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ConfigureCompanyView;
