//fetches comments for different types of entities

export const fetchComments = (id, type) => (
  $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: {
      id,
      type
    }
  })
);

// export const fetchQuestionComments = (question_id) => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/comments',
//     data: {
//       question_id
//     }
//   })
// );
//
//
// export const fetchAnswerComments = (answer_id) => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/comments',
//     data: {
//       answer_id
//     }
//   })
// );
//
// export const fetchUserComments = (user_id) => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/comments',
//     data: {
//       user_id
//     }
//   })
// );

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`,
  })
);


export const voteOnComment = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `api/comments/vote`,
    data: {
      comment_id: id,
      type
    }
  })
);

export const createComment = (commentableClass, commentableId, body) => (
  $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: {
      commentableClass,
      commentableId,
      body
    }
  })
);
