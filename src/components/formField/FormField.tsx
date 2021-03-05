import classNames from 'classnames';
import { useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import CheckBoxRadioField, { CheckBoxRadioFieldProps } from './components/CheckboxRadioField';
import OtherField, { OtherFieldProps } from './components/OtherField';

export interface BaseProps {
  className?: string;
  label: ReactNode;
  name: string;
  required?: boolean;
}

export interface SubComponentProps {
  shouldDisplayErrors: boolean;
}

type FormFieldProps = CheckBoxRadioFieldProps | OtherFieldProps;

const isCheckOrRadio = (props: FormFieldProps): props is CheckBoxRadioFieldProps => ['checkbox', 'radio'].includes(props.type);

export const FormField: FC<FormFieldProps> = ({ className, ...props }) => {
  const { errors, touched } = useFormikContext();

  const shouldDisplayErrors = !!errors[props.name] && !!touched[props.name];
  const containerClass = shouldDisplayErrors ? 'usa-input-error' : '';

  return (
    <div className={classNames(containerClass, className)}>
      {
        !isCheckOrRadio(props) && <OtherField shouldDisplayErrors={shouldDisplayErrors} {...props} />
      }
      {
        isCheckOrRadio(props) && <CheckBoxRadioField shouldDisplayErrors={shouldDisplayErrors} {...props} />
      }
    </div>
  );
};
