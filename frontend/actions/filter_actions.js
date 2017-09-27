import { fetchSearchQuestions } from './question_actions'
import { fetchSearchTopics } from './topic_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  if (filter === "query") {
    return fetchSearchQuestions(getState().filters)(dispatch);
  } else {
    return fetchSearchTopics(getState().filters)(dispatch);
  }
};
