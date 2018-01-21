import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { Input } from './FormElements';

describe('Form', () => {
  const form = shallow(<Form />);

  it ('renders properly', () => {
    expect(form).toMatchSnapshot();
  });
  
  it ('contains 3 Input components', () => {
    console.log(form.find(Input).length);
    expect(form.find(Input).length).toBe(3);
  });

});
