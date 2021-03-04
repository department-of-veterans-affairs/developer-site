import classNames from 'classnames';
import { Field, ErrorMessage } from 'formik';
import React, { ComponentPropsWithRef, FC, ReactNode } from 'react';
import toHtmlId from '../../../toHtmlId';
import { BaseProps, SubComponentProps } from '../FormField';

type FieldProps = ComponentPropsWithRef<typeof Field>;

export interface OtherFieldProps extends BaseProps {
  as?: FieldProps['as'];
  description?: ReactNode;
  type?: FieldProps['type'];
}

const OtherField: FC<OtherFieldProps & SubComponentProps> = ({ description, label, name, required, shouldDisplayErrors, ...props }) => {
  const labelClass = shouldDisplayErrors ? 'usa-input-error-label' : '';
  const validationClass = shouldDisplayErrors ? 'usa-input-error-message' : '';
  const fieldClass = props.as === 'textarea' ? classNames('vads-u-margin-top--2p5') : '';

  const idReadyName = toHtmlId(name);
  const descriptionId = description ? `${idReadyName}FormFieldDescription` : '';
  const errorId = `${idReadyName}FormFieldError`;
  const fieldId = `${idReadyName}FormField`;

  return (
    <>
      <label htmlFor={fieldId} className={classNames('vads-u-margin-top--0', labelClass)}>
        {label}{required && <span className="form-required-span">(*Required)</span>}
      </label>
      {
        description &&
        <div id={descriptionId}>
          {description}
        </div>
      }
      <span id={errorId} className={validationClass}>
        <ErrorMessage name={name} />
      </span>

      <Field
        id={fieldId}
        className={fieldClass}
        name={name}
        required={required}
        aria-describedby={`${errorId} ${descriptionId}`}
        aria-invalid={shouldDisplayErrors}
        {...props}
      />
    </>
  );
};

export default OtherField;
