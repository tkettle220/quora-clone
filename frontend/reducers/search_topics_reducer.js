import merge from 'lodash/merge';

import {RECEIVE_SEARCH_TOPICS} from '../actions/topic_actions.js'

const defaultState = {};

const SearchTopicsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_TOPICS:
      return action.topics;
    default:
      return state;
  }
};

export default SearchTopicsReducer
