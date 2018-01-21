import * as constants from '../actions/constants';

const workDay = (state = {}, action) => {
  switch(action.type) {
    case constants.START_TIME:
      return { ...state, startTime: action, };
    case constants.BREAK_DURATION:
      return { ...state, breakDuration: action };
    case constants.WORKING_HOURS:
      return { ...state, workingHours: action };
    default:
      return state;
  }
};

export default example;