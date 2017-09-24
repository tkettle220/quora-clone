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
