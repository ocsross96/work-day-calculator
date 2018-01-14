import { EXAMPLE } from '../actions/constants';

const example = (state = {}, action) => {
  switch(action.type) {
    case EXAMPLE:
      return action.example;
    default:
      return state;
  }
};

export default example;