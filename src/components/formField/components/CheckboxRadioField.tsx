import classNames from 'classnames';
import { Field } from 'formik';
import React, { FC } from 'react';
import toHtmlId from '../../../toHtmlId';
import { BaseProps, SubComponentProps } from '../FormField';

export interface CheckBoxRadioFieldProps extends BaseProps {
  type: 'checkbox' | 'radio';
  value?: string;
}

const CheckBoxRadioField: FC<CheckBoxRadioFieldProps & SubComponentProps> = ({ name, label, shouldDisplayErrors, type, value, ...props }) => {
  const labelClass = shouldDisplayErrors ? 'usa-input-error-label' : '';
  const radioClass = type === 'radio' ? 'vads-u-margin--0' : '';

  const idReadyName = toHtmlId(name);
  const fieldId = `${idReadyName}FormField${value ?? ''}`;

  return (
    <>
      <Field
        id={fieldId}
        name={name}
        aria-invalid={shouldDisplayErrors}
        type={type}
        value={value}
        {...props}
      />
      <label htmlFor={fieldId} className={classNames(labelClass, radioClass)}>{label}</label>
    </>
  );
};

export default CheckBoxRadioField;
