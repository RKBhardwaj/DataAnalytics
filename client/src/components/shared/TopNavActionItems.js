import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const TopNavActionItems = (props) => {
  const {
    actionsItems
  } = props;

  const items = actionsItems.map(item => (
    <Button key={item.key} onClick={event => item.action(event)}>
      <i className={`fa ${item.icon}`} />
    </Button>
  ));

  return (
    <ButtonGroup>
      {items}
    </ButtonGroup>
  );
};

export default TopNavActionItems;
