import * as constants from './constants';

export const setStartTime = (time) => {
  return {
    type: constants.START_TIME,
    payload: time
  }
}

export const setBreakDuration = (time) => {
  return {
    type: constants.BREAK_DURATION,
    payload: time
  }
}

export const setWorkingHours = (time) => {
  return {
    type: constants.WORKING_HOURS,
    payload: time
  }
}