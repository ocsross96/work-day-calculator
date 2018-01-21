import * as constants from '../actions/constants';
import { START_TIME, BREAK_DURATION } from '../actions/constants';

const workDay = (state = {}, action) => {
  switch(action.type) {
    case START_TIME:
      return { ...state, startTime: action };
    case BREAK_DURATION:
      return { ...state, breakDuration: action };
    case WORKING_HOURS:
      return { ...state, workingHours: action };
    default:
      return state;
  }
};

export default example;