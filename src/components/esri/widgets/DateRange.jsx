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
import { dateToIsoString } from '../../../utils/format';
import ToasterBuilder from "../../shared/ToasterBuilder";

// TODO: Install `date-fns` package and leverage features for date-range
// import addDays from 'date-fns/addDays'

class DateRangeComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: Date.now(),
      endDate: Date.now()
    };
    
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.showTransitionToaster = this.showTransitionToaster.bind(this)
  }
  
  shouldComponentUpdate() {
    console.log('DateRange Component - shouldComponentUpdate(): true');
    return true;
  }

  componentDidMount() {
    console.log('Component Did Load');
    const today = new Date(Date.now());
    // Start date defaults to seven (7) days
    this.setState({ 
      startDate: today.setDate(today.getDate()),
      endDate: today.setDate(today.getDate())
    })

    console.log('props:', this.props);
    console.log('State', this.state);
  }

  showTransitionToaster(content, toasterProps) {
    notify(content, toasterProps)
  }

  // TODO: Pending Deletion?
  handleStartDateChange(date) {
    const tempStartDateObj = new Date(date);
    const startDateIsoString = dateToIsoString(tempStartDateObj);

    // console.group('Start Date:>');
    // console.log('Date Param: ', tempStartDateObj);
    // console.log('Temp Date: ', startDateIsoString);
    // console.groupEnd();

    this.props.addToStoreCreator({ startDate: startDateIsoString });
    // this.props.dispatch({ type: 'ADD_TO_STORE', payload: { startDate: startDateIsoString } });

    // return tempStartDateObj;
  }
  // TODO: Pending Deletion?
  handleEndDateChange(date) {
    const tempEndDateObj = new Date(date);
    const endDateIsoString = dateToIsoString(tempEndDateObj);

    // console.group('End Date:>');
    // console.log('Date Param: ', tempEndDateObj);
    // console.log('Temp Date: ', endDateIsoString);
    // console.groupEnd();
    
    this.props.addToStoreCreator({ endDate: endDateIsoString });
    // this.props.dispatch({ type: 'ADD_TO_STORE', payload: { endDate: endDateIsoString } });
  }
  //#region [qp]
  //_On submit will open a stargate to a dimension that contains 'dots on map'!
  onFormSubmit(event) {
    event.preventDefault();

    // this.showTransitionToaster(
    //   'The Toaster with the Flip transition!',
    //   { 
    //     transition: Flip,
    //   },
    // )

    console.group('Date Range:>');
    console.log(this.props.startDate);
    console.log(this.props.endDate);
    console.groupEnd();

    const tokenizedPayload = { ...this.props.areaQuery, ...this.props.securityToken }

    console.log('Payload:', tokenizedPayload);

    const areaQueryData = this.props.sendAreaQueryCreator(tokenizedPayload);

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
            label="Start Date"
            // dropdownMode={"scroll"}
            selected={this.props.startDate}
            onChange={this.handleStartDateChange}
            onSelect={(date) => this.props.handleStartQuery(date)}
            name="startDate"
            dateFormat="MM/dd/yyyy"
            startDate={Date.now()}
            endDate={this.props.endDate}
            maxDate={Date.now()}
            minDate={new Date('16 Jun 2017 00:00:00 GMT')}
          />
        </div>
        <div className="form-group">
          <label>End Date: </label>
          <DatePicker
            id="endDatePicker"
            label="End Date"
            // dropdownMode={"scroll"}
            selected={this.props.endDate}
            onChange={this.handleEndDateChange}
            onSelect={(date) => this.props.handleEndQuery(date)}
            name="endDate"
            dateFormat="MM/dd/yyyy"
            startDate={Date.now()}
            endDate={this.props.endDate}
            maxDate={Date.now()}
            minDate={new Date('16 Jun 2017 00:00:00 GMT')}
          />
        </div>
        <div className="form-group">
          <Button className="btn btn-primary" type="submit">Submit</Button>
        </div>
        
      </form>

    );
  
  }
}

const mapStateToProps = state => {  // store.getState();
  console.log('state: ', state.areaQuery);
  return {
    // startDate: state.areaQuery.startDate,
    // endDate: state.areaQuery.endDate,
    // latitude: state.areaQuery.latitude,
    // longitude: state.areaQuery.longitude,
    // radius: state.areaQuery.radius,
    // status: state.areaQuery.status,
    // locationData: state.areaQuery.locationData
    areaQuery: state.areaQuery,
    securityToken: state.securityToken
  }
};

// ACTION CREATORS
const addToStoreCreator = (options) => ({ type: 'ADD_TO_STORE', payload: options });
const sendAreaQueryCreator = (options) => ({ type: 'SEND_AREA_QUERY', payload: options });

const actionCreators = {
  addToStoreCreator,
  sendAreaQueryCreator
}

export default connect(
  mapStateToProps, 
  actionCreators
)(DateRangeComponent);
