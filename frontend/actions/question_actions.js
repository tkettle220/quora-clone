import * as APIUtil from '../util/question_api_util'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_SEARCH_QUESTIONS = 'RECEIVE_SEARCH_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveSearchQuestions = (questions, filters) => ({
  type: RECEIVE_SEARCH_QUESTIONS,
  questions,
  filters
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  question
});

//assumes you want to fetch questions for the current_user
export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions().then(
    questions=>(dispatch(receiveQuestions(questions))
  ))
);

export const fetchSearchQuestions = (filters) => dispatch => (
  APIUtil.fetchQuestions(filters).then(
    questions=>(dispatch(receiveSearchQuestions(questions, filters))
  ))
);


export const fetchQuestion = id => dispatch => (
  APIUtil.fetchQuestion(id).then(
    question=>(dispatch(receiveQuestion(question))
  ))
);

export const createQuestion = (body) => dispatch => (
  APIUtil.createQuestion(body).then(
    question=>(dispatch(receiveQuestion(question))
  ))
);

export const voteOnQuestion = (id, type) => dispatch => (
  APIUtil.voteOnQuestion(id, type).then(
    question=>(dispatch(updateQuestion(question))
  ))
);

export const followQuestion = (id) => dispatch => (
  APIUtil.followQuestion(id).then(
    question=>(dispatch(updateQuestion(question))
  ))
);

export const unfollowQuestion = (id) => dispatch => (
  APIUtil.unfollowQuestion(id).then(
    question=>(dispatch(updateQuestion(question))
  ))
);
