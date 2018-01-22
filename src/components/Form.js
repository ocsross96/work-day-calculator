import React, { Component } from 'react';
import connect from 'react-redux';
import { Input } from './FormElements';

export class Form extends Component {
  constructor () {
    super();

    this.state = { startTime: 0 };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (ev) {
    ev.preventDefault();
    const value = ev.target.value;
    const name = ev.target.name;

    if(!isValidTime()) {
      // this.setState({
      //   [name]: value
      // });
    }

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
    return // validate time
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input label="Start time" id="startTime" name="startTime" onChange={this.handleInputChange} />
          <Input label="Break duration" id="breakDuration" name="breakDuration" onChange={this.handleInputChange} />
          <Input label="Working hours" id="workingHours" name="workingHours" onChange={this.handleInputChange} />
          <button type="submit" className="btn btn-primary">Calculate finish time</button>
        </form>
        <p>Your finish time is {this.props.finishTime}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startTime,
    breakDuration,
    workingHours,
    finishTime
  }
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
