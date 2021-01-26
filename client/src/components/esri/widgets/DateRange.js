// React
import React, { Component } from 'react';

// Redux
import { bindActionCreators } from 'redux';

// React / Redux
import { connect } from 'react-redux';

// Calcite
import DatePicker from 'react-datepicker';
// import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
import Button, { ButtonGroup } from 'calcite-react/Button';
// import Form, { Field, FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
// Esri
import FormTemplate from '@arcgis/core/form/FormTemplate';
import DateTimePickerInput from '@arcgis/core/form/elements/inputs/DateTimePickerInput';
import FieldElement from '@arcgis/core/form/elements/FieldElement';


import "react-datepicker/dist/react-datepicker.css";
import { areaQueryPush, areaQueryPuts } from '../../../redux/reducers/area-query';
// import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Install `date-fns` package and leverage features for date-range
// import addDays from 'date-fns/addDays'

class DateRangeComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
const DateRange = props => {

  const [state, setState] = useState({
    startDate:  null,
    endDate:    null,
    focusedInput: null
  });
=======
// Esri
import FormTemplate from '@arcgis/core/form/FormTemplate';
import DateTimePickerInput from '@arcgis/core/form/elements/inputs/DateTimePickerInput';
// import@arcgis/core/form/elements/FieldElement';


import "react-datepicker/dist/react-datepicker.css";
import { areaQueryPush, areaQueryPuts } from '../../../redux/reducers/area-query';
// import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Install `date-fns` package and leverage features for date-range
// import addDays from 'date-fns/addDays'

class DateRangeComponent extends Component {
<<<<<<< Updated upstream
=======

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(-7),
      startDateIso: "",
      endDate: new Date(),
      endDateIso: ""
    };
>>>>>>> Stashed changes
>>>>>>> Stashed changes

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(-7),
>>>>>>> Stashed changes
      startDateIso: "",
      endDate: new Date(),
      endDateIso: ""
    };
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  handleStartDateChange(date) {
    // convert param date:string to new date:object
    const tempStartDateObj = new Date(date);
    // convert date:object to date type ISO:String
    const startDateIsoString = tempStartDateObj.toISOString();
    
    console.group('>>- Start Date -->');
      console.log('On Date Event: ', date);
      console.log('Temp Date: ', startDateIsoString);
    console.groupEnd();

    this.setState({
      startDate: date,
      startDateIso: startDateIsoString
    })

    this.props.dispatch(areaQueryPush(this.state.startDateIso));
    // this.props.areaQueryPush(date);
    
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
  const onDatesChange = ({ startDate, endDate }) => {
    setState({
      startDate,
      endDate,
    });
>>>>>>> Stashed changes
  }

  handleEndDateChange(date, dispatch) {
    // convert param date:string to new date:object
    const tempEndDateObj = new Date(date);
    // convert date:object to date type isoString
    const endDateIsoString = tempEndDateObj.toISOString();

    console.group('>>- End Date -->');
    console.log('On Date Event: ', date);
    console.log('Temp Date: ', endDateIsoString);
    console.groupEnd();

    this.setState({
      endDate: date,  
      endDateIso: endDateIsoString
    })

    this.props.dispatch(areaQueryPush(this.state.endDateIso));
    // this.props.areaQueryPush(date);

  }

  onFormSubmit(e) {
    e.preventDefault();
    console.group('Date Range:');
      console.log(this.state.startDate);
      console.log(this.state.endDate);
    console.groupEnd();
  }

<<<<<<< Updated upstream
=======
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
=======
  handleStartDateChange(date, dispatch) {
    // convert param date:string to new date:object
    const tempStartDateObj = new Date(date);
    // convert date:object to date type ISO:String
    const startDateIsoString = tempStartDateObj.toISOString();
    
    console.group('>>- Start Date -->');
      console.log('On Date Event: ', date);
      console.log('Temp Date: ', startDateIsoString);
    console.groupEnd();

    this.setState({
      startDate: date,
      startDateIso: startDateIsoString
    })

    // this.props.dispatch(areaQueryPush(this.state.startDateIso));
    // this.props.areaQueryPush(date);
    dispatch({ type: 'AREA_QUERY_PUSH', startDateIsoString })
    
  }

  handleEndDateChange(date, dispatch) {
    // convert param date:string to new date:object
    const tempEndDateObj = new Date(date);
    // convert date:object to date type isoString
    const endDateIsoString = tempEndDateObj.toISOString();

    console.group('>>- End Date -->');
    console.log('On Date Event: ', date);
    console.log('Temp Date: ', endDateIsoString);
    console.groupEnd();

    this.setState({
      endDate: date,  
      endDateIso: endDateIsoString
    })

    // this.props.dispatch(areaQueryPush(this.state.endDateIso));
    dispatch({ type: 'AREA_QUERY_PUSH', endDateIsoString })
    // this.props.areaQueryPush(date);  

  }

  onFormSubmit(e) {
    e.preventDefault();
    console.group('Date Range:');
      console.log(this.state.startDate);
      console.log(this.state.endDate);
    console.groupEnd();
  }

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <label>Start Date: </label>
=======
          <label htmlFor={"startDatePicker"}>
            Start Date: 
          </label>
>>>>>>> Stashed changes
=======
          <label htmlFor={"startDatePicker"}>
            Start Date: 
          </label>
>>>>>>> Stashed changes
          <DatePicker
            id="startDatePicker"
            label={"Start Date"}
            selected={ this.state.startDate }
            onChange={ this.handleStartDateChange }
            name="startDate"
            dateFormat="MM/dd/yyyy"
            maxDate={Date.now() }
          />
        </div>
        <div className="form-group">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          <label>End Date: </label>
          <DatePicker
            id="endDatePicker"
            label="End Date"
=======
=======
>>>>>>> Stashed changes
          <label htmlFor={"endDatePicker"}>End Date: </label>
          <DatePicker
            id="endDatePicker"
            label={"End Date"}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            selected={ this.state.endDate }
            onChange={ this.handleEndDateChange }
            name="endDate"
            dateFormat="MM/dd/yyyy"
            maxDate={ Date.now() }
          />
        </div>
        <Button className="btn btn-primary">Submit</Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ areaQueryPush }, dispatch)
  }
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}

export default connect(mapDispatchToProps)(DateRangeComponent);
