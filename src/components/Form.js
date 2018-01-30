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

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.finishTime = this.finishTime.bind(this);
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

  handleSelectChange (ev) {
    ev.preventDefault();
  
    const value = ev.target.value;
    const name = ev.target.name;
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
    const startTime = moment().hour(this.props.startTime.hours).minutes(this.props.startTime.minutes);
    let finishTime = moment(startTime.add(this.props.workingHours).add(this.props.breakDuration));
    
    return finishTime.isValid() ? finishTime.format('HH:mm') : undefined;
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
