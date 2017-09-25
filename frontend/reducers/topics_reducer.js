import merge from 'lodash/merge';

import {RECEIVE_TOPICS, RECEIVE_TOPIC} from '../actions/topic_actions.js'
import {UPDATE_QUESTION} from '../actions/question_actions.js'

const defaultState = {};

const TopicsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    case RECEIVE_TOPIC:
      return merge({},state,{[action.topic.id]: action.topic});
    case UPDATE_QUESTION:
      let oldState = merge({}, state);
      let q_idx = oldState[action.question.topic.id].questions.findIndex((el)=>el.id===action.question.id);
      oldState[action.question.topic.id].questions[q_idx] = action.question;
      return oldState;
    default:
      return state;
  }
};

export default TopicsReducer
