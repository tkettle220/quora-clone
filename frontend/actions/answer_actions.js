import * as APIUtil from '../util/answer_api_util'


export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';


export const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

export const updateAnswer = answer => ({
  type: UPDATE_ANSWER,
  answer
});

//fetches answers for a given topic
export const fetchQuestionAnswers = (question_id) => dispatch => (
  APIUtil.fetchQuestionAnswers(question_id).then(
    answers=>(dispatch(receiveAnswers(answers))
  ))
);

//fetches all answers for a given users's topics
export const fetchAnswers = () => dispatch => (
  APIUtil.fetchAnswers().then(
    answers=>(dispatch(receiveAnswers(answers))
  ))
);

export const fetchAnswer = id => dispatch => (
  APIUtil.fetchAnswer(id).then(
    answer=>(dispatch(receiveAnswer(answer))
  ))
);

export const voteOnAnswer = (id, type) => dispatch => (
  APIUtil.voteOnAnswer(id, type).then(
    answer=>(dispatch(updateAnswer(answer))
  ))
);

export const createAnswer = (body, questionId) => dispatch => (
  APIUtil.createAnswer(body, questionId).then(
    answer=>(dispatch(receiveAnswer(answer))
  ))
);
