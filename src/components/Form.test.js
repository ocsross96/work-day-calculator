import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  const form = shallow(<Form />);

  it ('renders properly', () => {
    expect(form).toMatchSnapshot();
  });

});
