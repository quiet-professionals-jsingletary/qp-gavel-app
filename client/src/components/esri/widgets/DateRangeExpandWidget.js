// // React imports
// import React, { useEffect, useState } from 'react';

// // Formik imports
// import { Formik, Field, connect as connectFormik, withFormik } from 'formik';

// // Calcite imports
// import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
// import Button, { ButtonGroup } from 'calcite-react/Button';
// import Form, {FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

// const DateRangeExpandWidget = props => {

//   const [state, setState] = useState({
//     startDate:  null,
//     endDate:    null,
//     focusedInput: null
//   });

//   const {
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//   } = props;

//   // useEffect(() => {
//   //   // onDatesChange = onDatesChange.bind(formValues);
//   //   // onFocusChange = onFocusChange.bind(formValues);
//   //   // onSubmit = onSubmit.bind(formValues);
//   //   // onValidate = onValidate.bind(formValues);
//   // }, []);


//   const MyForm = props => {
//     const {
//       values,
//       formValues,
//       touched,
//       errors,
//       handleChange,
//       handleBlur,
//       handleSubmit,
//     } = props;
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.name}
//           name="name"
//         />
//         {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };

//   ////////

//   const MyEnhancedForm = withFormik({
//     mapPropsToValues: () => ({ name: '' }),

//     formValues: {
//       dateRange: { startDate: null, endDate: null }
//     },

//     // Custom sync validation
//     validate: values => {
//       const errors = {};

//       if (!values.name) {
//         errors.name = 'Required';
//       }

//       return errors;
//     },

//     handleSubmit: (values, { setSubmitting }) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//       }, 1000);
//     },

//     displayName: 'BasicForm',
//   })(MyForm);

// ///////
 


//   const onDatesChange = ({ startDate, endDate }) => {
//     setState({
//       startDate,
//       endDate,
//     });
//     console.log('onDatesChange: ', state.startDate);
//   }

//   const onFocusChange = (focusedInput) => {
//     setState({
//       focusedInput
//     });
//   }

//   const onSubmit = (values, actions) => {
//     setTimeout(() => {
//       console.log(values)
//       actions.setSubmitting(false)
//     }, 1000);
//   }

//   const onValidate = values => {
//     const errors = {}
//     if (
//       !values.dateRange ||
//       !values.dateRange.startDate ||
//       !values.dateRange.endDate
//     ) {
//       errors.dateRange = "This is required!"
//     }

//     return errors;
//   }

//   const handleSubmit = () => {

//   }

//   return (
//     <Formik 
//       initialValues={formValues}
//       validate={onValidate}
//       onSubmit={onSubmit}
//       onDatesChange={onDatesChange}
//     >
//       {({ values, errors, touched, handleSubmit, isSubmitting }) => (
//         <Form onSubmit={handleSubmit}>
//           {/* date-range */}

//           <FormControl
//             success={touched.dateRange && !errors.dateRange ? true : false}
//             error={touched.dateRange && errors.dateRange ? true : false}
//           >
//             <FormControlLabel>Search Dates:</FormControlLabel>
//             <Field as="input"
//               component={DateRangePicker}
//               name="dateRange"
//               startDate={state.startDate}
//               startDateId="formikStartDate"
//               endDate={state.endDate}
//               endDateId="formikEndDate"
//               onDatesChange={onDatesChange}
//               focusedInput={state.focusedInput}
//               onFocusChange={onFocusChange}
//             />
//             <FormHelperText>
//               {(touched.dateRange && errors.dateRange) || null}
//             </FormHelperText>
//           </FormControl>

//           <FormControl>
//             <Button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Searching...' : 'Search'}
//             </Button>
//           </FormControl>
//           {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
//         </Form>
//       )}
//     </Formik>
//   )
// }

// export default connectFormik(DateRangeExpandWidget);
