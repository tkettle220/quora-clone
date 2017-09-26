import * as APIUtil from '../util/comment_api_util'


export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';


export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

//fetches comments for a given question
export const fetchQuestionComments = (question_id) => dispatch => (
  APIUtil.fetchQuestionComments(question_id).then(
    comments=>(dispatch(receiveComments(comments))
  ))
);

export const fetchAnswerComments = (answer_id) => dispatch => (
  APIUtil.fetchAnswerComments(answer_id).then(
    comments=>(dispatch(receiveComments(comments))
  ))
);

//fetches all of a users comments
export const fetchUserComments = (user_id) => dispatch => (
  APIUtil.fetchUserComments(user_id).then(
    comments=>(dispatch(receiveComments(comments))
  ))
);



export const fetchComment = id => dispatch => (
  APIUtil.fetchComment(id).then(
    comment=>(dispatch(receiveComment(comment))
  ))
);

export const voteOnComment = (id, type) => dispatch => (
  APIUtil.voteOnComment(id, type).then(
    comment=>(dispatch(updateComment(comment))
  ))
);

export const createComment = (commentableClass, commentableId, body) => dispatch => (
  APIUtil.createComment(commentableClass, commentableId, body).then(
    comment=>(dispatch(receiveComment(comment))
  ))
);
