import * as APIUtil from '../util/topic_api_util'

export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const RECEIVE_SEARCH_TOPICS = 'RECEIVE_SEARCH_TOPICS';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';



export const receiveTopics = topics => ({
  type: RECEIVE_TOPICS,
  topics
});

export const receiveSearchTopics = topics => ({
  type: RECEIVE_SEARCH_TOPICS,
  topics
});

export const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});


export const updateTopic = topic => ({
  type: UPDATE_TOPIC,
  topic
});

//assumes you want to fetch topics for the current_user. Current_user is grabbed in the controller, so is not passed as arg here. Later can modify to take a filter arg which sends ajax to get all topics or get just topics for a user
export const fetchTopics = () => dispatch => (
  APIUtil.fetchTopics().then(
    topics=>(dispatch(receiveTopics(topics))
  ))
);

export const fetchSearchTopics = (filters) => dispatch => (
  APIUtil.fetchTopics(filters).then(
    topics=>(dispatch(receiveSearchTopics(topics))
  ))
);

export const fetchTopic = id => dispatch => (
  APIUtil.fetchTopic(id).then(
    topic=>(dispatch(receiveTopic(topic))
  ))
);

export const followTopic = (id) => dispatch => (
  APIUtil.followTopic(id).then(
    answer=>(dispatch(updateTopic(answer))
  ))
);

export const unfollowTopic = (id) => dispatch => (
  APIUtil.unfollowTopic(id).then(
    answer=>(dispatch(updateTopic(answer))
  ))
);
