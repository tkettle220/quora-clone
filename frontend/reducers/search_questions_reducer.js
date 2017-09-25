import merge from 'lodash/merge';

import {RECEIVE_SEARCH_QUESTIONS} from '../actions/question_actions.js'

const defaultState = {};

const SearchQuestionsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};

export default SearchQuestionsReducer
