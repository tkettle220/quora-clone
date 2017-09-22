//Doesn't take a user argument, since in the controller it uses the current_user as the user
export const fetchQuestions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/questions',
  })
);

export const fetchQuestion = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${id}`,
  })
);
