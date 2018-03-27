import React from 'react';
import ButtonGroup from 'react-bootstrap';

const PanelHeader = (props) => {
  const {
    vizTitle
  } = props;

  return (
    <div className="panel-heading">
      <h4>{vizTitle}</h4>
      <ButtonGroup>
        <i className="fa fa-pencil" />
        <i className="fa fa-table" />
        <i className="fa fa-cloud-download" />
        <i className="fa fa-trash" />
      </ButtonGroup>
    </div>
  );
};

export default PanelHeader;
