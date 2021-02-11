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

// Esri
import FormTemplate from '@arcgis/core/form/FormTemplate';
import DateTimePickerInput from '@arcgis/core/form/elements/inputs/DateTimePickerInput';
import FieldElement from '@arcgis/core/form/elements/FieldElement';


import "react-datepicker/dist/react-datepicker.css";
// import {
//   areaQueryPuts,
//   areaQueryPush,
//   areaQueryReady,
//   areaQuerySend,
//   areaQueryFail
// } from '../../../redux/reducers/area-reducer';
import {
  areaQueryPutsSaga,
  areaQueryPushSaga,
  areaQueryReadySaga,
  areaQuerySendSaga
} from '../../../redux/actions/area-query-actions';
// import 'bootstrap/dist/css/bootstrap.min.css';

// TODO: Install `date-fns` package and leverage features for date-range
// import addDays from 'date-fns/addDays'

class DateRangeComponent extends Component {

  constructor(props) {
    super(props)
    console.log('props:', props);
    this.state = {
      startDate: new Date(),
      startDateIso: "",
      endDate: new Date(),
      endDateIso: ""
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

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
    });

    // areaQueryPush(date);
    // this.props.dispatch({ task: 'AREA_QUERY_PUSH_SAGA', startDate: startDateIsoString });
    // this.props.dispatch(areaQueryPush(this.state.startDateIso));
    // this.props.areaQueryPush(date);
    this.props.startDatePush(this.state.startDateIso);
  }

  handleEndDateChange(date) {
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
    // this.props.areaQueryPush(date);
    this.props.endDatePush(this.state.endDateIso);
  }
  //#region [qp]
  //_ On submit will open a stargate to a dimension that contains 'dots on map'!
  onFormSubmit(event) {
    event.preventDefault();
    console.group('Date Range:');
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.groupEnd();
  }
  //#endregion

  componentDidMount() {
    // onload logic
  }

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
        <Button className="btn btn-primary">Submit</Button>
      </form>
    );
  }
}

const mapStateToProps = state => {  // store.getState();
  console.log('state: ', state.areaQuery);
  return {
    // areaQuery: {
    //   startDate: ownProps.startDateIso,
    //   endDate: ownProps.endDateIso,
    //   latitude: state.latitude,
    //   longitude: state.longitude,
    //   radius: state.radius,
    //   status: state.status
    // },
    areaQuery: state.areaQuery,
    securityToken: state.securityToken
  };
};

const mapDispatchToProps = dispatch => { // store.dispatch();
  return {
    startDatePush: () => dispatch(areaQueryPushSaga()),
    endDatePush: () => dispatch(areaQueryPushSaga()),
    areaQuerySubmit: () => dispatch(areaQuerySendSaga()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeComponent);