import { Form } from 'antd';
import React from 'react';
import ReactJson from 'react-json-view';
import { useField } from 'formik';

interface IProps {
  name: string;
  label: string;
  children?: React.ReactNode;
  isRequired?: boolean;
  description?: string;
  isDebugging?: boolean;
  layout?: any;
}

// eslint-disable-next-line import/prefer-default-export
export const makeFormField = (Component: any) => ({
  name,
  children,
  label,
  isRequired,
  isDebugging,
  layout,
  description,
  ...rest
}: IProps & {
  [prop: string]: any;
}) => {
  const [input, meta] = useField<string>(name);
  const hasError = meta.touched && meta.error !== undefined;
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <>
      <Form.Item
        label={label}
        hasFeedback={hasError}
        validateStatus={hasError ? 'error' : 'success'}
        help={hasError && meta.error}
        required={isRequired}
        {...layout}
      >
        {description && <div className="form-field-description">{description}</div>}
        <Component {...input} {...rest}>
          {children}
        </Component>
      </Form.Item>
      {isDebugging && <ReactJson src={input} name="fieldInput" />}
      {isDebugging && <ReactJson src={meta} name="meta" />}
    </>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};
