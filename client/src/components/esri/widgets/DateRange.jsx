/*/
  *  ┌────────────────────────────────────────┐
  *  │ |> Date Range Component - Area Query   │
  *  └────────────────────────────────────────┘
/*/
// React
import React, { Component } from 'react';

// React / Redux
import { connect } from 'react-redux';

// Calcite
import DatePicker from 'react-datepicker';
// import DatePicker, { DateRangePicker } from 'calcite-react/DatePicker';
import Button, { ButtonGroup } from 'calcite-react/Button';
// import Form, { Field, FormControl, FormControlLabel, FormHelperText } from 'calcite-react/Form';

import "react-datepicker/dist/react-datepicker.css";
// import * as actions from '../../../redux/actions/area-query-actions';
// import 'bootstrap/dist/css/bootstrap.min.css';
import areaQuery, {
  addToStoreAction,
  sendAreaQueryAction
} from "../../../redux/reducers/area-query";

// TODO: Install `date-fns` package and leverage features for date-range
// import addDays from 'date-fns/addDays'

class DateRangeComponent extends Component {

  constructor(props) {
    super(props)
    console.log('props:', props);
    this.state = {
      startDate: new Date(),
      startDateIso: new Date().toISOString().slice(0, -5) + 'Z',
      endDate: new Date(),
      endDateIso: new Date().toISOString().slice(0, -5) + 'Z'
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  shouldComponentUpdate() {
    console.log('DateRange <Child> Component - shouldComponentUpdate()<lifecycle>');
    return false;
  }

  handleStartDateChange(date) {
    // convert param date:string to new date:object
    const tempStartDateObj = new Date(date);
    // convert date:object to date type ISO:String
    const startDateIsoString = tempStartDateObj.toISOString().slice(0, -5) + 'Z';

    console.group('Start Date:>');
    console.log('On Date Event: ', date);
    console.log('Temp Date: ', startDateIsoString);
    console.groupEnd();

    this.setState({
      startDate: date,
      startDateIso: startDateIsoString
    });

    this.props.addToStoreCreator({ startDate: startDateIsoString });
    // this.props.dispatch({ type: 'ADD_TO_STORE', payload: { startDate: startDateIsoString } });
  }

  handleEndDateChange(date) {
    // convert param date:string to new date:object
    const tempEndDateObj = new Date(date);
    // convert date:object to date type isoString
    const endDateIsoString = tempEndDateObj.toISOString().slice(0, -5) + "Z";
    console.group('End Date:>');
    console.log('On Date Event: ', date);
    console.log('Temp Date: ', endDateIsoString);
    console.groupEnd();
    
    this.setState({
      endDate: date,
      endDateIso: endDateIsoString
    });
    
    this.props.addToStoreCreator({ endDate: endDateIsoString });
    // this.props.dispatch({ type: 'ADD_TO_STORE', payload: { endDate: endDateIsoString } });
  }
  //#region [qp]
  //_ On submit will open a stargate to a dimension that contains 'dots on map'!
  onFormSubmit(event) {
    event.preventDefault();

    console.group('Date Range:>');
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.groupEnd();

    const tokenedPayload = { ...this.props.areaQuery, ...this.props.securityToken }

    console.log('Payload:', tokenedPayload);

    const areaQueryData = this.props.sendAreaQueryCreator(tokenedPayload);

    return areaQueryData;
  }
  //#endregion

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>Start Date: </label>
          <DatePicker
            id="startDatePicker"
            label={"Start Date"}
            selected={this.state.startDate}
            onChange={this.handleStartDateChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
            maxDate={Date.now()}
          />
        </div>
        <div className="form-group">
          <label>End Date: </label>
          <DatePicker
            id="endDatePicker"
            label="End Date"
            selected={this.state.endDate}
            onChange={this.handleEndDateChange}
            name="endDate"
            dateFormat="MM/dd/yyyy"
            maxDate={Date.now()}
          />
        </div>
        <Button className="btn btn-primary" type="submit">Submit</Button>
      </form>
    );
  }
}

// const mapStateToProps = state => {  // store.getState();
//   console.log('state: ', state.areaQuery);
//   return {
//     startDate: state.areaQuery.startDate,
//     endDate: state.areaQuery.endDate,
//     latitude: state.areaQuery.latitude,
//     longitude: state.areaQuery.longitude,
//     radius: state.areaQuery.radius,
//     status: state.areaQuery.status,
//     locationData: state.areaQuery.locationData
//   }
// };

// ACTION CREATORS
const addToStoreCreator = (options) => ({ type: 'ADD_TO_STORE', payload: options });
const sendAreaQueryCreator = (options) => ({ type: 'SEND_AREA_QUERY', payload: options });

const actionCreators = {
  addToStoreCreator,
  sendAreaQueryCreator
}

export default connect(
  null, 
  actionCreators
)(DateRangeComponent);
