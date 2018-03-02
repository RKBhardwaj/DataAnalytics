import React from 'react';
import constants from '../../common/constants';

const ErrorBox = (props) => {
  const {
    show,
    fields
  } = props;

  const showContent = show ? 'show' : 'hide';

  const FieldsWithError = (
    fields.map((field, i) => {
      const fieldTitle = <b>{field}</b>;
      return (
        <li key={i}>{fieldTitle} cannot be blank</li>
      );
    })
  );

  return (
    <div className={`error-box ${showContent}`}>
      <h4>{constants.common.FORM_ERROR_HEADING}</h4>
      <h5>{constants.common.FORM_ERROR_SUBHEADING}</h5>
      <ul>
        {FieldsWithError}
      </ul>
    </div>
  );
};

export default ErrorBox;
