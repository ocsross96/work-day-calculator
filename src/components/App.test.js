import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Form from './Form';

describe('App', () => {
  const app = shallow(<App />);

  it ('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it ('contains a connected Form component', () => {
    expect(app.find('Connect(Form)').exists()).toBe(true);
  });

  it ('contains a Form component', () => {
    expect(app.find(Form).exists()).toBe(true);
  });

});
