import React, { Component } from 'react';

export default class Form extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <form>
        this is the form
        <div className="form-group">
          <label for="startTime">Start time</label>
          <input type="text" className="form-control" id="startTime" />
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
