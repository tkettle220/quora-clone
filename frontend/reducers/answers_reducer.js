import merge from 'lodash/merge';

import {RECEIVE_ANSWERS, RECEIVE_ANSWER} from '../actions/answer_actions.js'

const defaultState = {};

const AnswersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWERS:
      return merge({}, state, action.answers);
    case RECEIVE_ANSWER:
      return {[action.answer.id]: action.answer};
    default:
      return state;
  }
};

export default AnswersReducer
