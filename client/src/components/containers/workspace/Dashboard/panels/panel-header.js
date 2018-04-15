import React from 'react';
import { ButtonGroup, Button, Row, Col } from 'react-bootstrap';

const PanelHeader = (props) => {
  const {
    title
  } = props;

  return (
    <Row className="panel-heading">
      <Col lg={8} md={8} sm={12} xs={12}>
        <h4>{title}</h4>
      </Col>
      <Col lg={4} md={4} sm={12} xs={12} className="pull-right">
        <ButtonGroup>
          <Button><i className="fa fa-pencil" /></Button>
          <Button><i className="fa fa-table" /></Button>
          <Button><i className="fa fa-cloud-download" /></Button>
          <Button><i className="fa fa-trash" /></Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default PanelHeader;
