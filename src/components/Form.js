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
    this.handleInputChange = this.handleInputChange.bind(this);
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

  calculateFinishTime () {
    const startTime = this.state.startTime;
    const breakDuration = this.state.breakDuration;
    const workingHours = this.state.workingHours;

    console.log('get finish time');
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
    const target = ev.target;
    const value = target.value;
    const name = target.name;
    const unit = ev.target.getAttribute('data-unit');

    console.log(value);
    console.log(typeof value);

    switch (name) {
      case 'startTime':
        //this.props.onStartTimeChange(value);
        break;
      case 'breakDuration':
        //this.props.onBreakDurationChange(value);
        break;
      case 'workingHours':
        //this.props.onWorkingHoursChange(value);
        break;
      default:
      // some default case here

    }
  }

  handleSubmit (ev) {
    ev.preventDefault();
    console.log(this.state);
  }

  isValidTime () {
    return true;
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
        { this.state.finishTime &&
          <p>Your finish time is {this.state.finishTime}</p>
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
