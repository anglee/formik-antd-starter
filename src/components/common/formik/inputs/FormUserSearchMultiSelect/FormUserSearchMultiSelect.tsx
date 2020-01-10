import { Form } from 'antd';
import React from 'react';
import { useField } from 'formik';
import ReactJson from 'react-json-view';
import UserSearchMultiSelect from '../../../inputs/UserSearchMultiSelect/UserSearchMultiSelect';
import { IUser } from '../../../../../types/IUser';

interface IProps {
  name: string;
  label: string;
  isRequired?: boolean;
  description?: string;
  isDebugging?: boolean;
  layout?: any;
}

const FormUserSearchMultiSelect = ({
  name,
  label,
  isRequired,
  isDebugging,
  layout,
  description,
}: IProps) => {
  const [input, meta, helpers] = useField<IUser[]>(name);
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
        <UserSearchMultiSelect value={input.value} onChange={v => helpers.setValue(v)} />
      </Form.Item>
      {isDebugging && <ReactJson src={input} name="fieldInput" />}
      {isDebugging && <ReactJson src={meta} name="meta" />}
    </>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default FormUserSearchMultiSelect;
