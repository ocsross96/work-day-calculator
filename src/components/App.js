import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <div className="jumbotron">
              <h1>Work Day Calculator</h1>
              <p className="lead">Use our quick and easy tool to calculate what time you will finish work.</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
