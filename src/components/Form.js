import React, { Component } from 'react';
import { Input } from './FormElements';

export default class Form extends Component {
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

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit (ev) {
    ev.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input label="Start time" id="startTime" name="startTime" onChange={this.handleInputChange} />
        <Input label="Break duration" id="breakDuration" name="breakDuration" onChange={this.handleInputChange} />
        <Input label="Working hours" id="workingHours" name="workingHours" onChange={this.handleInputChange} />
        <button type="submit" className="btn btn-primary">Calculate finish time</button>
      </form>
    );
  }
}
