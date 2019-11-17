import { useFormikContext } from 'formik';
import ReactJson from 'react-json-view';
import React from 'react';

const FormikContextViewer = () => {
  const context = useFormikContext();
  return <ReactJson src={context} />;
};

export default FormikContextViewer;
