import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from './FormElements';
import { setStartTime, setBreakDuration, setWorkingHours } from '../actions/workDay';

export class Form extends Component {
  constructor (props) {
    super(props);

    this.state = { 
      startTime: props.startTime,
      breakDuration: props.breakDuration,
      workingHours: props.workingHours
    };

    console.log(this.state);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (ev) {
    ev.preventDefault();
    const value = ev.target.value;
    const name = ev.target.name;

    this.setState({
      [name]: value
    });

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
          <Input label="Start time" id="startTime" name="startTime" onChange={this.handleInputChange} value={this.state.startTime} />
          <Input label="Break duration" id="breakDuration" name="breakDuration" onChange={this.handleInputChange} value={this.state.breakDuration} />
          <Input label="Working hours" id="workingHours" name="workingHours" onChange={this.handleInputChange} value={this.state.workingHours} />
          <button type="submit" className="btn btn-primary">Calculate finish time</button>
        </form>
        <p>Your finish time is {this.props.finishTime}</p>
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
