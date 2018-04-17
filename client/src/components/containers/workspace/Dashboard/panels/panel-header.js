import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const PanelHeader = (props) => {
  const {
    title
  } = props;

  return (
    <div className="panel-heading">
      <h4>{title}</h4>
      <ButtonGroup>
        <Button><i className="fa fa-pencil" /></Button>
        <Button><i className="fa fa-table" /></Button>
        <Button><i className="fa fa-cloud-download" /></Button>
        <Button><i className="fa fa-trash" /></Button>
      </ButtonGroup>
    </div>
  );
};

export default PanelHeader;
