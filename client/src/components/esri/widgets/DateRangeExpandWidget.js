// React imports
import React, { useState } from 'react';

// Formik imports
import { Formik, Field, connect } from 'formik';

// Calcite imports
import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
import Button, { ButtonGroup } from 'calcite-react/Button';
import Form, {FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

const DateRangeExpandWidget = props => {

  const [state, setState] = useState({
    startDate:  null,
    endDate:    null,
    focusedInput: null
  });

  const formValues = {
    dateRange: { startDate: null, endDate: null }
  }

  const onDatesChange = ({ startDate, endDate }) => {
    setState({
      startDate,
      endDate,
    });
  }

  const onFocusChange = (focusedInput) => {
    setState({
      focusedInput
    });
  }

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(values)
      actions.setSubmitting(false)
    }, 1000);
  }

  const onValidate = (values) => {
    const errors = {}
    if (
      !values.dateRange ||
      !values.dateRange.startDate ||
      !values.dateRange.endDate
    ) {
      errors.dateRange = "This is required!"
    }

    return errors;
  }

  return (
    <Formik
      initialValues={formValues}
      validate={onValidate}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          {/* booking */}

          <FormControl
            success={touched.dateRange && !errors.dateRange ? true : false}
            error={touched.dateRange && errors.dateRange ? true : false}
          >
            <FormControlLabel>Search Dates:</FormControlLabel>
            <Field
              component={DateRangePicker}
              name="dateRange"
              startDate={state.startDate}
              startDateId="formikStartDate"
              endDate={state.endDate}
              endDateId="formikEndDate"
              onDatesChange={onDatesChange}
              focusedInput={state.focusedInput}
              onFocusChange={onFocusChange}
            />
            <FormHelperText>
              {(touched.booking && errors.booking) || null}
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </FormControl>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default connect(DateRangeExpandWidget);
