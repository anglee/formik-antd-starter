import React, { forwardRef, useImperativeHandle } from 'react';
import { Formik, FormikProps, FormikConfig } from 'formik';

// https://github.com/jaredpalmer/formik/issues/1603
// https://github.com/jaredpalmer/formik/issues/1603#issuecomment-557540190
// https://github.com/jaredpalmer/formik/pull/1972
/* eslint-disable no-underscore-dangle */
function FormikWithRef(props: FormikConfig<any>, ref: any) {
  let _formikProps: FormikProps<any>;

  useImperativeHandle(ref, () => _formikProps);

  return (
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <Formik {...props}>
      {formikProps => {
        _formikProps = formikProps;
        if (typeof props.children === 'function') {
          return props.children(formikProps);
        }
        return props.children;
      }}
    </Formik>
  );
}
/* eslint-enable no-underscore-dangle */
export default forwardRef(FormikWithRef);
