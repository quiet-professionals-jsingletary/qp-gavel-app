/*/
 *  ┌───────────────────────┐
 *  │ |> Format Utility     │
 *  └───────────────────────┘
/*/
import React from 'react';
import PropTypes from 'prop-types';

// Format.propTypes = {
//   date: PropTypes.object
// };

const Format = ({ date }) => {

  return;
}

const dateToIsoString = (date) => {
  const dateObj = new Date(date);
  const dateObjIso = dateObj.toISOString().slice(0, -5) + 'Z';

  console.group('Formatted Date:>');
  console.log('Date Prop: ', dateObj);
  console.log('Format Date: ', dateObjIso);
  console.groupEnd();

  return dateObjIso;
} 

export default Format;
export { dateToIsoString }
