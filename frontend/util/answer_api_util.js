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

export const fetchAnswers = () => (
  $.ajax({
    method: 'GET',
    url: `api/answers`,
  })
);

export const voteOnAnswer = (id, type) => (
  $.ajax({
    method: 'POST',
    url: `api/answers/vote`,
    data: {
      answer_id: id,
      type
    }
  })
);

export const createAnswer = (body, question_id) => (
  $.ajax({
    method: 'POST',
    url: `api/answers`,
    data: {
      answer: {
        body
      },
      question_id
    }
  })
);
