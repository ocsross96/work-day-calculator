import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Input, TimeSelect } from './FormElements';
import { setStartTime, setBreakDuration, setWorkingHours } from '../actions/workDay';

export class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      startTime: props.startTime,
      breakDuration: props.breakDuration,
      workingHours: props.workingHours,
      finishTime: undefined
    };

    // console.log(this.state);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.finishTime = this.finishTime.bind(this);
    this.isValidTime = this.isValidTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getHours (maxHours) {
    let hours = [];
    for (var i = 0; i <= maxHours; i++) {
      hours.push(i < 10 ? '0' + i : '' + i);
    }
    return hours;
  }

  getMinutes (divisor) {
    let minutes = [];
    for (var i = 0; i < 60; i++) {
      if (i % divisor === 0) {
        minutes.push(i < 10 ? '0' + i : '' + i);
      }
    }
    return minutes;
  }

  handleInputChange (ev) {
    ev.preventDefault();
    const value = ev.target.value;
    const name = ev.target.name;

    // this.setState({
    //   [name]: value
    // });

    if(!this.isValidTime()) {
      console.log('not valid time');
    }

    console.log('input value', ev.target.value);

    switch (name) {
      case 'startTime':
        this.props.onStartTimeChange(value);
        break;
      case 'breakDuration':
        this.props.onBreakDurationChange(value);
        break;
      case 'workingHours':
        this.props.onWorkingHoursChange(value);
        break;
      default:
      // some default case here

    }
  }

  handleSelectChange (ev) {
    ev.preventDefault();
    
    // if (!isValid(value)) {
    //   return;
    // }
    
    const value = ev.target.value;
    const name = ev.target.name;
    // const time = this.calculateTime(value);
    const splitName = name.split('-');
    const desc = splitName[0];
    const unit = splitName[1];

    switch (desc) {
      case 'startTime':
        this.props.onStartTimeChange({ 
          [unit]: value
        });
        break;
      case 'breakDuration':
        this.props.onBreakDurationChange({ 
          [unit]: value
        });
        break;
      case 'workingHours':
        this.props.onWorkingHoursChange({ 
          [unit]: value
        });
        break;
      default:
      // some default case here

    }
  }

  finishTime () {
    console.log(moment);
    console.log(moment().hour(1).minutes(23));

    console.log(this.props.startTime);

    if (!this.isValidTime) {
      return;
    }

    const startTime = moment().hour(this.props.startTime.hours).minutes(this.props.startTime.minutes);
    // const breakDuration = moment().hour(this.props.breakDuration.hours).minutes(this.props.breakDuration.minutes);
    // const workingHours = moment().hour(this.props.workingHours.hours).minutes(this.props.workingHours.minutes);
    
    let finishTime = moment(startTime
      .add({
        'hours': this.props.workingHours.hours, 
        'minutes': this.props.workingHours.minutes
      })
      .add({
        'hours': this.props.breakDuration.hours,
        'minutes': this.props.breakDuration.minutes
      })
    );

    console.log('finishTime', finishTime);
    
    return finishTime.isValid() ? finishTime.format('HH:mm') : undefined;
  }

  calculateTime (value) {
    const intValue = parseInt(value, 10);
    const splitName = name.split('-');
    const desc = splitName[0];
    const unit = splitName[1];
    let time = undefined;

    if (unit === 'hours') {
      time = moment(this.state[desc].minutes).format('mm');
    }

    if (unit === 'minutes') {
      time = moment(this.state[desc].hours).format('hh');
    }



    return time;
  }

  handleSubmit (ev) {
    ev.preventDefault();
    console.log(this.state);
  }

  isValidTime () {
    return ((this.props.workingHours > 0) && (this.props.workingHours > this.props.breakDuration))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <Input
            type="time"
            label="Start time"
            id="startTime"
            name="startTime"
            onChange={this.handleInputChange}
            value={this.props.startTime}
          /> */}
          <TimeSelect
            name="startTime"
            title="Start time"
            hours={this.getHours(24)}
            minutes={this.getMinutes(15)}
            onSelectChange={this.handleSelectChange}
          />
          <TimeSelect
            name="breakDuration"
            title="Break duration"
            hours={this.getHours(5)}
            minutes={this.getMinutes(15)}
            onSelectChange={this.handleSelectChange}
          />
          <TimeSelect
            name="workingHours"
            title="Working hours"
            hours={this.getHours(12)}
            minutes={this.getMinutes(15)}
            onSelectChange={this.handleSelectChange}
          />
          {/* <Input
            type="text"
            label="Break duration"
            id="breakDuration"
            name="breakDuration"
            onChange={this.handleInputChange}
            value={this.props.breakDuration}
          />
          <Input
            type="text"
            label="Working hours"
            id="workingHours"
            name="workingHours"
            onChange={this.handleInputChange}
            value={this.props.workingHours}
          /> */}
        </form>
        { this.finishTime() &&
          <p>Your finish time is {this.finishTime()}</p>
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartTimeChange: (time) => {
      dispatch(setStartTime(time));
    },
    onBreakDurationChange: (time) => {
      dispatch(setBreakDuration(time));
    },
    onWorkingHoursChange: (time) => {
      dispatch(setWorkingHours(time));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
