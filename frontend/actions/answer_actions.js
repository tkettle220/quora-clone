import * as APIUtil from '../util/answer_api_util'


export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';

export const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

//fetches answers for a given topic
export const fetchQuestionAnswers = (question_id) => dispatch => (
  APIUtil.fetchQuestionAnswers(question_id).then(
    answers=>(dispatch(receiveAnswers(answers))
  ))
);

export const fetchAnswer = id => dispatch => (
  APIUtil.fetchAnswer(id).then(
    answer=>(dispatch(receiveAnswer(answer))
  ))
);
