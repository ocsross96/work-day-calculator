import * as constants from '../actions/constants';

const workDay = (state = {}, action) => {
  switch(action.type) {
    case constants.START_TIME:
      return { ...state, startTime: action.payload, finishTime: getFinishTime() };
    case constants.BREAK_DURATION:
      return { ...state, breakDuration: action.payload };
    case constants.WORKING_HOURS:
      return { ...state, workingHours: action.payload };
    default:
      return state;
  }
};

const getFinishTime = () => {
  return 5;
}

export default workDay;