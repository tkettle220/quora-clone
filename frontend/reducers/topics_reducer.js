import merge from 'lodash/merge';

import {RECEIVE_TOPICS, RECEIVE_TOPIC} from '../actions/topic_actions.js'

const defaultState = {};

const TopicsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    case RECEIVE_TOPIC:
      return merge({},state,{[action.topic.id]: action.topic});
    default:
      return state;
  }
};

export default TopicsReducer
