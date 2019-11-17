import React from 'react';
import { useField } from 'formik';
import { Form, Input } from 'antd';
import ReactJson from 'react-json-view';

interface IProps {
  name: string;
  label: string;
  description?: string;
  isRequired?: boolean;
  isDebugging: boolean;
}

const FormInput = ({ name, label, description, isRequired, ...rest }: IProps) => {
  const [input, meta] = useField<string>(name);
  const hasError = meta.touched && meta.error !== undefined;
  const hasFeedback = false;
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <>
      <Form.Item
        label={label}
        validateStatus={hasError ? 'error' : 'success'}
        hasFeedback={hasFeedback && hasError}
        help={hasError && meta.error}
        required={isRequired}
      >
        {description && <div className="form-field-description">{description}</div>}
        <Input {...input} {...rest} />
        {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      </Form.Item>
      <ReactJson src={input} name="fieldInput" />
      <ReactJson src={meta} name="meta" />
    </>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default FormInput;
