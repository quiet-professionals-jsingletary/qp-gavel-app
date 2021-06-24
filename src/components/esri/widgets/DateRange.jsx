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

import "react-datepicker/dist/react-datepicker.css";
// import * as actions from '../../../redux/actions/area-query-actions';
// import 'bootstrap/dist/css/bootstrap.min.css';
import areaQuery, {
  addToStoreAction,
  sendAreaQueryAction
} from "../../../redux/reducers/area-query";
import { addPatternToStoreAction } from "../../../redux/reducers/pattern-of-life-query";
import { dateToIsoString } from '../../../utils/format';
import NoticeBuilder from "../../shared/NoticeBuilder";
import { 
  CalciteAlert, 
  CalciteButton, 
  CalciteDatePicker,
  CalciteInput,
  CalciteInputDatePicker,
  CalciteLabel,
  CalciteNotice
} from "@esri/calcite-components-react";

// import { submit } from "@esri/calcite-ui-icons";

// TODO: Install `date-fns` package and leverage features for date-range
// import addDays from 'date-fns/addDays'

class DateRangeComponent extends Component {

  constructor(props) {
    super(props)
    this.defaultDate = new Date();
    this.startDate = this.defaultDate.getDate() - 7;
    this.endDate = this.defaultDate.getDate() - 1;
    this.state = {
      startDate: Date.now(),
      endDate: Date.now()
    };
    
    this.handleDatePickerRangeChange = this.handleDatePickerRangeChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.showTransitionToaster = this.showTransitionToaster.bind(this)

    // const form = document.getElementById('formDateRange');
    // this.formDateRange = null;
    this.alertInfo = null;
    this.submitBtn = null;
  }
  
  //#region [lifecycle]
  shouldComponentUpdate() { 
    console.log('DateRange Component Update');
    return true;
  }
  
  componentDidUpdate() {
    console.log('DateRange Component Did Update');
  }

  componentDidMount() {
    console.log('DateRange Component Did Load');
    const today = new Date(Date.now());

    // Set start date to default to seven (7) days
    this.setState({
      startDate: today.setDate(today.getDate()),
      endDate: today.setDate(today.getDate())
    });

    // const form = document.getElementById('formDateRange');
    this.formDateRange = document.getElementById('formDateRange');
    this.alertInfo = document.getElementById('alertInfo');
    this.submitDatesBtn = document.getElementById('submitDatesBtn');

    console.log('DateRange Props:', this.props);
    console.log('DateRange State', this.state);
  }

  // showTransitionToaster(content, toasterProps) {
  //   notify(content, toasterProps)
  // }

  // Component Callback Handlers
  handleDatePickerRangeChange(event) {
    console.log('DateRange `onChange` Handler: ', event);

    const startDateFull = event.detail.startDate;
    const endDateFull = event.detail.endDate;

    this.handleStartDateChange(startDateFull);
    this.handleEndDateChange(endDateFull);
  }

  // TODO: Pending Deletion?
  handleStartDateChange(date) {
    const tempStartDateObj = new Date(date);
    const startDateIsoString = dateToIsoString(tempStartDateObj);

    this.state.startDate = startDateIsoString;
    this.props.addToStoreCreator({ startDate: startDateIsoString });
    this.props.addPatternToStoreCreator({ startDate: startDateIsoString });
    // this.props.dispatch({ type: 'ADD_TO_STORE', payload: { startDate: startDateIsoString } });
  }
  // TODO: Pending Deletion?
  handleEndDateChange(date) {
    const tempEndDateObj = new Date(date);
    const endDateIsoString = dateToIsoString(tempEndDateObj);
    
    this.state.endDate = endDateIsoString;
    this.props.addToStoreCreator({ endDate: endDateIsoString });
    this.props.addPatternToStoreCreator({ endDate: endDateIsoString });
    // this.props.dispatch({ type: 'ADD_TO_STORE', payload: { endDate: endDateIsoString } });
  }
  //#region [qp]
  // // NOTE: On submit will open a stargate to a dimension that contains 'dots on map'!

  handleFormSubmit(event) {
    event.preventDefault();

    console.log('keyword `this` is: ', this);

    this.submitDatesBtn.setAttribute('loading', '');
    this.submitDatesBtn.setAttribute('disabled', '');
    this.alertInfo.active = true;

    console.group('Date Range:>');
    console.log(this.props.startDate);
    console.log(this.props.endDate);
    console.groupEnd();

    const tokenizedPayload = { ...this.props.areaQuery, ...this.props.securityToken }
    const areaQueryData = this.props.sendAreaQueryCreator(tokenizedPayload);

    console.log('Tokenized_Payload:', tokenizedPayload);

    return areaQueryData;
  }
  //#endregion

  //! CODE: https://reactjs.org/docs/handling-events.html

  render() {
    return (
      <form id="formDateRange">
        {/* <fieldset> */}
          {/* <legend>Date Ranges</legend> */}
          <div className="form-group">
            <CalciteDatePicker
              id="dateRangePicker"
              label="Date range picker"
              range=""
              scale="s"
              activeRange="start"
              startAsDate={new Date(this.props.startDate)}
              endAsDate={new Date(this.props.endDate)}
              min="2017-06-16"
              maxAsDate={new Date(this.props.endDate)}
              valueAsDate={new Date(this.props.endDate)}
              locale="en"
              next-month-label="Next month"
              prev-month-label="Previous month"
              layout="vertical"
              role="application"
              proximity-selection-disabled=""
              onCalciteDatePickerRangeChange={(e) => this.handleDatePickerRangeChange(e)}
            >
            </CalciteDatePicker>
            {/* <CalciteInputDatePicker
              id="dateRangePicker"
              label="Date range picker"
              startAsDate={new Date(this.startDate)}
              endAsDate={new Date(this.endDate)}
              maxAsDate={new Date()}
              minAsDate={new Date(2017, 5, 16)}
              placeholder="Select date range"
              locale="en"
              next-month-label="Next month"
              prev-month-label="Previous month"
              range=""
              layout="vertical"
              overlayPositioning="fixed"
              role="application"
              scale="m"
              calciteDatePickerRangeChange={this.handleDatePickerRangeChange()}
              >
            </CalciteInputDatePicker> */}
          </div>
          <div className="form-group">
            {/* <Button 
              id="submitDatesBtn"
              // icon="submit"
              type="submit">Submit
            </Button> */}
            <CalciteButton
              id="submitDatesBtn"     
              appearance="solid"
              color="blue"
              icon-start="submit"
              scale="m"
              type="button"
              width="full"
              onClick={this.handleFormSubmit}>
              Submit
            </CalciteButton>

          </div>
          
        {/* </fieldset> */}
        
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
    patternQuery: state.patternQuery,
    securityToken: state.securityToken
  }
};

// ACTION CREATORS
const addToStoreCreator = (options) => ({ type: 'ADD_TO_STORE', payload: options });
const addPatternToStoreCreator = (options) => ({ type: 'ADD_PATTERN_TO_STORE', payload: options });
const sendAreaQueryCreator = (options) => ({ type: 'SEND_AREA_QUERY', payload: options });


const actionCreators = {
  addToStoreCreator,
  addPatternToStoreCreator,
  sendAreaQueryCreator
}

export default connect(
  mapStateToProps, 
  actionCreators
)(DateRangeComponent);
