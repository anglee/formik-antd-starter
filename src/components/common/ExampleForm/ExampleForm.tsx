import React, { useEffect, useRef } from 'react';
import { FormikErrors } from 'formik';
import { Alert, Button, Col, Row, Spin } from 'antd';
import _ from 'lodash';
import { Element, scroller } from 'react-scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import spinnerDelay from '../../../constants/spinnerDelay';
import IExampleData, { IExampleDataEditable } from '../../../types/IExampleData';
import './ExampleForm.less';
import FormInput from '../formik/inputs/FormInput/FormInput2';
import FormTextArea from '../formik/inputs/FormTextArea/FormTextArea';
import FormikContextViewer from '../formik/FormikContextViewer/FormitContextViewer';
import FormikWithRef from '../formik/FormikWithRef/FormikWithRef';
import FormUserSearchMultiSelect from '../formik/inputs/FormUserSearchMultiSelect/FormUserSearchMultiSelect';
import { IUser } from '../../../types/IUser';

export interface IExampleFormValues {
  name: string;
  website: string;
  description: string;
  users: IUser[];
}

export const defaultValues: IExampleFormValues = {
  name: '',
  website: '',
  description: '',
  users: [],
};

export const validate = (values: IExampleFormValues): IErrors => {
  const errors: FormikErrors<IExampleFormValues> = {};
  if (_.isEmpty(values.name)) {
    errors.name = 'name is required';
  }
  return errors;
};

export const toFormValues = (exampleData: IExampleData): IExampleFormValues => ({
  name: exampleData.name,
  website: exampleData.website || '',
  description: exampleData.description || '',
  users: exampleData.users || [],
});

export const fromFormValues = ({
  name,
  website,
  description,
  users,
}: IExampleFormValues): IExampleDataEditable => ({
  name,
  website: _.isEmpty(website) ? undefined : website,
  description: _.isEmpty(description) ? null : description,
  users,
});

interface IProps {
  initialValues?: IExampleFormValues;
  disabled?: boolean;
  submitButtonText: string;
  submissionError: string | null;
  onSubmit: (values: IExampleFormValues) => Promise<void>;
  formRef?: any;
}

type IErrors = FormikErrors<IExampleFormValues>;

const ExampleForm = ({
  submitButtonText,
  submissionError,
  initialValues,
  disabled,
  onSubmit,
  formRef,
}: IProps) => {
  const scrollToFirstError = (errors: IErrors = {}) => {
    const orderedFields: (keyof IErrors)[] = ['name'];
    for (const field of orderedFields) {
      const fieldName = `position-${field}`;
      if (!_.isEmpty(errors[field]) && document.querySelectorAll(`[name="${fieldName}"]`).length) {
        scroller.scrollTo(fieldName, { smooth: true, duration: 400, delay: 100 });
        break;
      }
    }
  };

  const isUnmounted = useRef(false);
  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  return (
    <div className="ExampleForm">
      <ErrorBoundary messagePrefix="Page Error: ">
        <FormikWithRef
          ref={formRef}
          enableReinitialize={true}
          initialValues={initialValues || defaultValues}
          validate={validate}
          onSubmit={async (values, actions) => {
            try {
              await onSubmit(values);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error('error', error);
            } finally {
              if (!isUnmounted.current) {
                actions.setSubmitting(false);
              }
            }
          }}
        >
          {({ isSubmitting, handleSubmit, values }) => {
            return (
              <>
                <form
                  onSubmit={e => {
                    const localValidationErrors = validate(values);
                    if (!_.isEmpty(localValidationErrors)) {
                      scrollToFirstError(localValidationErrors);
                      return false;
                    }
                    return handleSubmit(e);
                  }}
                >
                  <Spin spinning={isSubmitting} tip="Saving..." delay={spinnerDelay}>
                    <Row className="form-row">
                      <Col lg={24} md={24} sm={24}>
                        <Element name="position-name">
                          <FormInput
                            label="Name"
                            name="name"
                            isRequired={true}
                            placeholder="example data name"
                            autoFocus={!disabled}
                            disabled={disabled}
                          />
                        </Element>
                      </Col>
                    </Row>
                    <Row className="form-row">
                      <Col lg={24} md={24} sm={24}>
                        <Element name="position-website">
                          <FormInput
                            label="Website"
                            name="website"
                            placeholder=""
                            disabled={disabled}
                          />
                        </Element>
                      </Col>
                    </Row>
                    <Row className="form-row">
                      <Col lg={24} md={24} sm={24}>
                        <Element name="position-description">
                          <FormTextArea
                            label="Description"
                            name="description"
                            rows={5}
                            disabled={disabled}
                          />
                        </Element>
                      </Col>
                    </Row>
                    <Row className="form-row">
                      <Col lg={24} md={24} sm={24}>
                        <Element name="position-description">
                          <FormUserSearchMultiSelect label="Users" name="users" />
                        </Element>
                      </Col>
                    </Row>
                  </Spin>
                  {submissionError && (
                    <Alert
                      className="ExampleForm-submit-err-banner"
                      message={submissionError}
                      type="error"
                    />
                  )}
                  <Button
                    disabled={disabled || isSubmitting}
                    className="submit-button"
                    htmlType="submit"
                    type="primary"
                  >
                    {submitButtonText}
                  </Button>
                </form>
                <FormikContextViewer />
              </>
            );
          }}
        </FormikWithRef>
      </ErrorBoundary>
    </div>
  );
};

export default ExampleForm;
