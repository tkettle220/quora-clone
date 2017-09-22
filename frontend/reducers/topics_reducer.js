import merge from 'lodash/merge';

import {RECEIVE_TOPICS} from '../actions/topic_actions.js'

const defaultState = {};

const TopicsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    default:
      return state;
  }
};

export default TopicsReducer
