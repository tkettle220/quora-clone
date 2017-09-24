import * as APIUtil from '../util/question_api_util'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

//assumes you want to fetch questions for the current_user
export const fetchQuestions = (filters) => dispatch => (
  APIUtil.fetchQuestions(filters).then(
    questions=>(dispatch(receiveQuestions(questions))
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
