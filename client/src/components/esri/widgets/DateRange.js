// // React imports
// import React, { useState } from 'react';

// // Formik imports
// // import { Formik } from 'formik';

// // Calcite imports
// import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
// import Button, { ButtonGroup } from 'calcite-react/Button';
// // import Form, { Field, FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

// // Esri imports
// import FormTemplate from '@arcgis/core/form/FormTemplate';
// import DateTimePickerInput from '@arcgis/core/form/elements/inputs/DateTimePickerInput';
// import FieldElement from '@arcgis/core/form/elements/FieldElement';


// const QueryDateRange = props => {

//   const [state, setState] = useState({
//     startDate:  null,
//     endDate:    null
//   });

//   const formValues = {
//     dateRange: { startDate: null, endDate: null }
//   }

//   const onDatesChange = ({ startDate, endDate }) => {
//     setState({
//       startDate,
//       endDate,
//     });
//   }

//   const onFocusChange = (focusedInput) => {

//   }

//   const dateObj = new Date('16 Jun 2017 00:00:00 GMT');
//   const minDate = dateObj.getUTCMilliseconds();
//   const maxDate = new Date.now(-1).getUTCMilliseconds();
//   // dateObj.setDate(-1);

//   // Start Date
//   const startDateLabel = new FieldElement({
//     fieldName: "startDateLabel",
//     label: "Start Date:"
//   });

//   const startDatePicker = new FieldElement({
//     fieldName: "queryDateRange",
//     label: "Date Range:",
//     description: "Query data for results between this date range",
//     input: { // DateTimePickerInput
//       type: "datetime-picker",
//       includeTime: false,
//       min: minDate,
//       max: maxDate
//     }
//   });

//   // End Date
//   const endDateLabel = new FieldElement({
//     fieldName: "startDateLabel",
//     label: "Start Date:"
//   });

//   const endDatePicker = new FieldElement({
//     fieldName: "queryDateRange",
//     label: "Date Range:",
//     description: "Query data for results between this date range",
//     input: { // DateTimePickerInput
//       type: "datetime-picker",
//       includeTime: false,
//       min: minDate,
//       max: maxDate
//     }
//   });

//   // const submitQueryBtn = new Button({
//   //   fieldName: "placename",
//   //   label: "Business name",
//   //   editable: false
//   // });

//   // Next pass in any elements to the FormTemplate
//   const dateRangeFormTemplate = new FormTemplate({
//     title: "Select Date Range",
//     description: "Query data for results between this date range",
//     elements: [startDateLabel, startDatePicker, endDateLabel, endDatePicker] // Add all elements to the template
//   });

//   return (dateRangeFormTemplate)
// }

// export default QueryDateRange;
