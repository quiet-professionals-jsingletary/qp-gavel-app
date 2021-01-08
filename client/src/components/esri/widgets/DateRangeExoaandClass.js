// React imports
import React, { Component, useState } from 'react';

// Formik imports
import { Formik, Field, connect } from 'formik';

// Calcite imports
import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
import Button, { ButtonGroup } from 'calcite-react/Button';
import Form, { FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

() => {
  class DateRangeExpandWidget extends Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
        focusedInput: null
      }

      this.formValues = {
        dateRange: { startDate: null, endDate: null }
      }

      this.onDatesChange = this.onDatesChange.bind(this);
      this.onFocusChange = this.onFocusChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onValidate = this.onValidate.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
      this.setState({
        startDate,
        endDate
      });
    }

    onFocusChange(focusedInput) {
      this.setState({
        focusedInput
      });
    }

    onSubmit(values, actions) {
      setTimeout(() => {
        console.log(values)
        actions.setSubmitting(false)
      }, 1000);
    }

    onValidate(values) {
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

    render() {
      return (
        <Formik
          initialValues={formValues}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {/* dateRange */}

              <FormControl
                success={touched.dateRange && !errors.dateRange ? true : false}
                error={touched.dateRange && errors.dateRange ? true : false}
              >
                <FormControlLabel>Search Dates:</FormControlLabel>
                <Field as="input"
                  component={DateRangePicker}
                  name="dateRange"
                  startDate={this.state.startDate}
                  startDateId="formikStartDate"
                  endDate={this.state.endDate}
                  endDateId="formikEndDate"
                  onDatesChange={onDatesChange}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={onFocusChange}
                />
                <FormHelperText>
                  {(touched.dateRange && errors.dateRange) || null}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Searching...' : 'Search'}
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      )
    }
  }
  return <DateRangeExpandWidget />
}