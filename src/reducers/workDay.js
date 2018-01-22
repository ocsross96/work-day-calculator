import * as constants from '../actions/constants';

let defaultState = {
  startTime: 0,
  breakDuration: 0,
  workingHours: 0
};

const workDay = (state = defaultState, action) => {
  switch(action.type) {
    case constants.START_TIME:
      return { ...state, startTime: action.payload };
    case constants.BREAK_DURATION:
      return { ...state, breakDuration: action.payload };
    case constants.WORKING_HOURS:
      return { ...state, workingHours: action.payload };
    default:
      return state;
  }
};

export default workDay;