import merge from 'lodash/merge';

import {RECEIVE_QUESTIONS, RECEIVE_QUESTION, UPDATE_QUESTION} from '../actions/question_actions.js'

const defaultState = {};

const QuestionsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return merge({},state,{[action.question.id]: action.question});
    case UPDATE_QUESTION:
      let oldState = merge({}, state);
      oldState[action.question.id] = action.question;
      return oldState;
    default:
      return state;
  }
};

export default QuestionsReducer
