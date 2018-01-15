import React, { Component } from 'react';
import Form from './Form';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        Work day calculator

        <div>
          <Form />
        </div>
      </div>
    );
  }
}
