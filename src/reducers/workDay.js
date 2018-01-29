import * as constants from '../actions/constants';

let defaultState = {
  startTime: {
    hours: 0,
    minutes: 0
  },
  breakDuration: {
    hours: 0,
    minutes: 0
  },
  workingHours: {
    hours: 0,
    minutes: 0
  }
};

const workDay = (state = defaultState, action) => {
  switch(action.type) {
    case constants.START_TIME:
      return { 
        ...state, 
        startTime: {
          ...state.startTime,
          ...action.payload
        }
      };
    case constants.BREAK_DURATION:
      return { 
        ...state, 
        breakDuration: {
          ...state.breakDuration,
          ...action.payload
        }
      };
    case constants.WORKING_HOURS:
      return { 
        ...state, 
        workingHours: {
          ...state.workingHours,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default workDay;
