import React, { Component } from 'react';
import Input from './FormElements';

export default class Form extends Component {
  constructor () {
    super();
  }

  render () {
    const startTimeInput = {
      label: 'Start time',
      id: 'startTime',
    }
    return (
      <form>
        this is the form
        <Input label="Start time" id="startTime" />
        
        <div className="form-group">
          <label for="startTime">Start time</label>
          <input type="text" className="form-control" id="startTime" value="" />
        </div>
        <div className="form-group">
          <label for="breakDuration">Break duration</label>
          <input type="text" className="form-control" id="breakDuration"/>
        </div>
        <div className="form-group">
          <label for="workingHours">Working hours</label>
          <input type="text" className="form-control" id="workingHours"/>
        </div>
        <button type="submit" className="btn btn-primary">Calculate finish time</button>
      </form>
    );
  }
}
