import React from 'react';
import constants from '../../common/constants';

const ErrorBox = (props) => {
  const {
    show,
    fields
  } = props;

  const showContent = show ? 'show' : 'hide';

  const FieldsWithError = (
    fields.map((field) => {
      const fieldTitle = <b>{field}</b>;
      return (
        <li>{fieldTitle} cannot be blank</li>
      );
    })
  );

  return (
    <div className={showContent}>
      <h2>{constants.common.FORM_ERROR_HEADING}</h2>
      <h4>{constants.common.FORM_ERROR_SUBHEADING}</h4>
      <ul>
        {FieldsWithError}
      </ul>
    </div>
  );
};

export default ErrorBox;
