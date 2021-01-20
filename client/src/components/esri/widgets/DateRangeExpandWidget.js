// React imports
import React, { useEffect, useState } from 'react';

// Formik imports
import { connect as connectFormik, Field, useFormik } from 'formik';

// Calcite imports
import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
import Button, { ButtonGroup } from 'calcite-react/Button';
import Form, {FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

import DateTimePickerInput from '@arcgis/core/form/elements/inputs/DateTimePickerInput';
import FieldElement from '@arcgis/core/form/elements/FieldElement';

const DateRangeExpandWidget = props => {

  const [values, setValues] = useState({
    startDate: null,
    endDate: null,
    dateRange: null,
    focusedInput: null
  });

  const dateTimeInput = new DateTimePickerInput({})

  // const validate = values => {
  //   const errors = {}
  //   if (
  //     !values.dateRange ||
  //     !values.dateRange.startDate ||
  //     !values.dateRange.endDate
  //   ) {
  //     errors.dateRange = "This is required!"
  //   }

  //   return errors;
  // };

  // Event handler functions
  const handleChange = event => {
    setValues(prevValues => ({
      ...prevValues,
      // we use the name to tell formik which key of `values` to update.
      [event.target.name]: event.target.value
    }));
  } 

  let touched = '';
  let errors = '';
  let isSubmitting = false;

  const formik = useFormik({
    initialValues: {
      startDate: null, 
      endDate: null 
    },
    // validate,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* date-range */}

      <FormControl
        success={touched.dateRange && !errors.dateRange ? true : false}
        error={touched.dateRange && errors.dateRange ? true : false}
      >
        <FormControlLabel>Search Dates:</FormControlLabel>
        <DateTimePickerInput />
        {/* <Field as="input"
          component={DateRangePicker}
          name="queryDateRange"
          startDate={formik.values.startDate}
          startDateId="queryStartDate"
          endDate={formik.values.endDate}
          endDateId="queryEndDate"
          onDatesChange={formik.handleChange}
          focusedInput={formik.values.focusedInput}
          onFocusChange={formik.handleBlur}
          numberOfMonths={1}
          isOutsideRange={() => { }}
          
        /> */}
        {/* <FormHelperText>
          {(touched.dateRange && errors.dateRange) || null}
        </FormHelperText> */}
      </FormControl>

      <FormControl>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Searching...' : 'Search'}
        </Button>
      </FormControl>
      {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
    </Form>
  );

  

  // useEffect(() => {
  //   onDatesChange = onDatesChange.bind(formValues);
  //   onFocusChange = onFocusChange.bind(formValues);
  //   onSubmit = onSubmit.bind(formValues);
  //   onValidate = onValidate.bind(formValues);
  // }, []);

  ////////

  // const MyEnhancedForm = withFormik({
  //   mapPropsToValues: () => ({ name: '' }),

  //   formValues: {
  //     dateRange: { startDate: null, endDate: null }
  //   },

  //   // Custom sync validation
  //   validate: values => {
  //     const errors = {};

  //     if (!values.name) {
  //       errors.name = 'Required';
  //     }

  //     return errors;
  //   },

  //   handleSubmit: (values, { setSubmitting }) => {
  //     setTimeout(() => {
  //       alert(JSON.stringify(values, null, 2));
  //       setSubmitting(false);
  //     }, 1000);
  //   },

  //   displayName: 'BasicForm',
  // })(MyForm);
}

export default DateRangeExpandWidget;
