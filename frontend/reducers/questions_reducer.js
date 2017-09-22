import merge from 'lodash/merge';

import {RECEIVE_QUESTIONS, RECEIVE_QUESTION} from '../actions/question_actions.js'

const defaultState = {};

const QuestionsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return {[action.question.id]: action.question};
    default:
      return state;
  }
};

export default QuestionsReducer
