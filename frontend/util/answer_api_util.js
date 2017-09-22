//assumes fetching answers for a single question
export const fetchQuestionAnswers = (question_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/answers',
    data: {
      question_id
    }
  })
);

export const fetchAnswer = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/answers/${id}`,
  })
);
