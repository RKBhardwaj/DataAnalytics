import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';

const DropDown = (props) => {
  const {
    title,
    id,
    name,
    onSelectHandler,
    menuItems
  } = props;

  const MenuItems = menuItems.map(item => (
    <MenuItem key={item.key} eventKey={item}>item.title</MenuItem>
  ));

  return (
    <SplitButton
      bsStyle={title.toLowerCase()}
      title={title}
      name={name}
      id={id}
      onSelect={onSelectHandler}
    >
      {MenuItems}
    </SplitButton>
  );
};

export default DropDown;
