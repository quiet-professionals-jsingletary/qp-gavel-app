// React imports
import React, { useState, Component, Fragment } from 'react';

// Formik imports
// import { Formik } from 'formik';

// Calcite imports
import Button, { ButtonGroup } from 'calcite-react/Button';
// import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
import DatePicker from "@arcgis/core/widgets/support/DatePicker"; 
import Form, {
  Field, FormControl,
  FormHelperText,
  FormControlLabel,
  Fieldset,
  Legend } from 'calcite-react/Form';

const DateRangeWidget = props => {

  const [state, setState] = useState({
    startDate:  null,
    endDate:    null,
    focusedInput: null
  });

  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    focusedInput,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue
  } = props;

  const formValues = {
    dateRange: { startDate: null, endDate: null }
  }

  const onDatesChange = ({ startDate, endDate }) => {
    console.log('onDatesChange Event: ', startDate );
    setState({
      startDate,
      endDate
    });
  }

  const onFocusChange = (focusedInput) => {
    console.log('onFocusChange Event: ', focusedInput);
    setState({
      focusedInput
    });
  }

  return (
    <Form horizontal>

    </Form>
  );

};
export default DateRangeWidget; 

//!! Solution #1

// const [state, setState] = useState({
//   startDate:  null,
//   endDate:    null,
//   focusedInput: null
// });

// const formValues = {
//   dateRange: { startDate: null, endDate: null }
// }

// const onDatesChange = ({ startDate, endDate }) => {
//   setState({
//     startDate,
//     endDate,
//   });
// }

// const onFocusChange = (focusedInput) => {
//   setState({
//     focusedInput,
//   });
// }

// return (
//   <div>
//     <DateRangePicker
//       startDate={state.startDate}
//       startDateId="searchStartDate"
//       endDate={state.endDate}
//       endDateId="searchEndDate"
//       onDatesChange={onDatesChange}
//       focusedInput={state.focusedInput}
//       onFocusChange={onFocusChange}
//     />
//   </div>
// )

//!! Solution #2

//   < Formik
// initialValues = {{ date: "" }}
// onSubmit = {(values, { setSubmitting }) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//   }, 500);
// }}
//   >
//   { props => {
//   const {
//     values,
//     touched,
//     errors,
//     dirty,
//     isSubmitting,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     handleReset,
//     setFieldValue
//   } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <DateRangePicker
//         name="date"

//         value={values.date}
//         onChange={setFieldValue}
//       />
//       <Button onClick={() => console.log('Reset')} >Reset</Button>
//       <Button type="submit" onClick={() => console.log('Submit')}>Submit</Button>
//       <button
//         type="button"
//         className="outline"
//         onClick={handleReset}
//         disabled={!dirty || isSubmitting}
//       >
//         Reset
//           </button>
//       <button >
//         Submit
//           </button>

//       <DisplayFormikState {...props} />
//     </form>
//   );
// }}
//   </Formik >

//!! Solution #3

// return (
//   <form onSubmit={handleSubmit}>
//     <DateRangePicker
//       name="date"
//       value={values.date}
//       onChange={setFieldValue}
//     />
//     <Button onClick={() => console.log('Reset')} >Reset</Button>
//     <Button type="submit" onClick={() => console.log('Submit')}>Submit</Button>
//     <button
//       type="button"
//       className="outline"
//       onClick={handleReset}
//       disabled={!dirty || isSubmitting}
//     >
//       Reset
//           </button>
//     <button >
//       Submit
//           </button>

//     <DisplayFormikState {...props} />
//   </form>
// )

//!! Solution #4
{/* <form onSubmit={handleSubmit} onReset={handleReset}>
  <DatePicker
    name="startDate"
    value={"01 / 21 / 2021"}
    onChange={onDatesChange}
  />
  <div> :: </div>
  <DatePicker
    name="endDate"

    value={"01 / 21 / 2021"}
    onChange={onDatesChange}
  />
  <ButtonGroup>
    <Button onClick={() => console.log('Handle Reset')}> Reset</Button>
    <Button type="submit" disabled={!dirty || isSubmitting}
      onClick={() => console.log('Handle Submit')}> Submit
          </Button>
  </ButtonGroup>

</form> */}
