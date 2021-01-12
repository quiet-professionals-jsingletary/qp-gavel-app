// React imports
import React, { useState } from 'react';

// Formik imports
// import { Formik } from 'formik';

// Calcite imports
import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
// import Button, { ButtonGroup } from 'calcite-react/Button';
// import Form, { Field, FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

const DateRange = props => {

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
      focusedInput,
    });
  }

  return (
    <div>
      <DateRangePicker
        startDate={state.startDate}
        startDateId="searchStartDate"
        endDate={state.endDate}
        endDateId="searchEndDate"
        onDatesChange={onDatesChange}
        focusedInput={state.focusedInput}
        onFocusChange={onFocusChange}
      />
    </div>
  )
}

export default DateRange;
