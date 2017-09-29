import merge from 'lodash/merge';

import {RECEIVE_SEARCH_QUESTIONS} from '../actions/question_actions.js'

const defaultState = {};

const SearchQuestionsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_QUESTIONS:
    //this is horrible, but if a user deletes their search, we want to wait a bit and make sure to clear out the search questions so that a previous query doesn't get back afterwards...couldn't find a great place to put a settimeout, so I'm just doing a manual sleep .2 seconds here haha
      if(action.filters.query === "") {
        var start = new Date().getTime();
        var now = start;
        while(now < start + 200) {
          now = new Date().getTime();
        }
        return {};
      } else {
        return action.questions;
      }
    default:
      return state;
  }
};

export default SearchQuestionsReducer
