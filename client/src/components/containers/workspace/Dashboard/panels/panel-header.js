import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const PanelHeader = (props) => {
  const {
    key,
    title,
    onRemoveItem
  } = props;

  return (
    <div className="panel-heading">
      <h4>{title}</h4>
      <ButtonGroup className="pull-right">
        <Button><i className="fa fa-pencil" /></Button>
        <Button><i className="fa fa-table" /></Button>
        <Button><i className="fa fa-cloud-download" /></Button>
        <Button
          onClick={() => onRemoveItem(key)}
        >
          <i className="fa fa-trash" />
        </Button>
        <Button><i className="fa fa-arrows" /></Button>
      </ButtonGroup>
    </div>
  );
};

export default PanelHeader;
