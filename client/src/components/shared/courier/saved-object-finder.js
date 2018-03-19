import React from 'react';
import DropDown from '../DropDown';

const SavedObjectFinder = (props) => {
  const {
    user,
    title,
    id,
    name,
    objectList,
    selectHandler
  } = props;

  return (
    <div className="object-finder">
      <DropDown
        title={title}
        id={id}
        name={name}
        onSelectHandler={selectHandler}
        menuItems={objectList}
      />
    </div>
  );
};

export default SavedObjectFinder;
