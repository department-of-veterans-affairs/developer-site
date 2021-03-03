import classNames from 'classnames';
import { Field } from 'formik';
import React, { FC } from 'react';
import toHtmlId from 'src/toHtmlId';
import { BaseProps, SubComponentProps } from '../FormField';

export interface CheckBoxRadioFieldProps extends BaseProps {
  type: 'checkbox' | 'radio';
  value?: string;
}

const CheckBoxRadioField: FC<CheckBoxRadioFieldProps & SubComponentProps> = ({ name, label, shouldDisplayErrors, ...props }) => {
  const labelClass = shouldDisplayErrors ? 'usa-input-error-label' : '';

  const idReadyName = toHtmlId(name);
  const fieldId = `${idReadyName}FormField`;

  return (
    <>
      <Field
        id={fieldId}
        name={name}
        aria-invalid={shouldDisplayErrors}
        {...props}
      />
      <label htmlFor={fieldId} className={classNames(labelClass)}>{label}</label>
    </>
  );
};

export default CheckBoxRadioField;
