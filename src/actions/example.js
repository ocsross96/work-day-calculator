import * as constants from './constants';

export const setExample = example => {
  return {
    type: constants.EXAMPLE,
    payload: 'example'
  }
}