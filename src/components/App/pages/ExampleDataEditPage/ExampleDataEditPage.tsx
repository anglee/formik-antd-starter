import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Alert, Spin } from 'antd';
import qs from 'qs';

import { useLocation } from 'react-router';
import ExampleForm, {
  fromFormValues,
  IExampleFormValues,
  toFormValues,
} from '../../../common/ExampleForm/ExampleForm';
import { IExampleDataEditable } from '../../../../types/IExampleData';
import spinnerDelay from '../../../../constants/spinnerDelay';
import useFetchedExampleData from './useFetchedExampleData';
import exampleDataApi from '../../../../utils/api/apiExampleData';

const getExampleDataId = (search: string): string => {
  return qs.parse(search, { ignoreQueryPrefix: true }).id;
};

const ExampleDataEditPage = () => {
  const location = useLocation();
  const exampleDataId = getExampleDataId(location.search);

  const { isFetching, fetchError, fetchedExampleData } = useFetchedExampleData(exampleDataId);
  const [initialFormValues, setInitialFormValues] = useState<IExampleFormValues | undefined>(
    undefined,
  );

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setInitialFormValues(fetchedExampleData ? toFormValues(fetchedExampleData) : undefined);
  }, [fetchedExampleData ? fetchedExampleData.id : null]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const updateExampleData = useCallback(async (id: string, data: IExampleDataEditable) => {
    setIsUpdating(true);
    try {
      await exampleDataApi.update(id, data);
    } catch (error) {
      setUpdateError(error.message);
    } finally {
      setIsUpdating(false);
    }
  }, []);

  const formRef = useRef();

  return (
    <section className="ExampleDataEditPage alee-page">
      <h1>Edit Example Data (id={exampleDataId})</h1>
      {fetchError && (
        <div>
          <Alert message={`Failed to load example data. ${fetchError}`} type="error" />
        </div>
      )}
      <Spin spinning={isFetching} tip="Loading..." delay={spinnerDelay}>
        <ExampleForm
          initialValues={initialFormValues}
          disabled={!!fetchError}
          submitButtonText={isUpdating ? 'Updating...' : 'Update'}
          submissionError={updateError ? `Failed to update example data. ${updateError}` : null}
          onSubmit={async (values: IExampleFormValues) =>
            updateExampleData(exampleDataId, fromFormValues(values))
          }
          formRef={formRef}
        />
      </Spin>
      <hr />
      <h2>Remote submit button</h2>
      <Button
        type="primary"
        disabled={!!fetchError || !!isUpdating}
        onClick={() => {
          if (formRef.current) {
            (formRef.current as any).handleSubmit();
          }
        }}
      >
        Remote submit
      </Button>
    </section>
  );
};

export default ExampleDataEditPage;
