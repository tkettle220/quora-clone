//Doesn't take a user argument, since in the controller it uses the current_user as the user
export const fetchQuestions = data => (
  $.ajax({
    method: 'GET',
    url: 'api/questions',
    data
  })
);

export const fetchQuestion = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${id}`,
  })
);

export const createQuestion = (body) => (
  $.ajax({
    method: 'POST',
    url: `api/questions`,
    data: {
      question: {
        body
      }
    }
  })
);

export const voteOnQuestion = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/vote`,
    data: {
      question_id: id,
      type
    }
  })
);

export const followQuestion = (id) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/follow`,
    data: {
      question_id: id,
    }
  })
);

export const unfollowQuestion = (id) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/unfollow`,
    data: {
      question_id: id,
    }
  })
);
