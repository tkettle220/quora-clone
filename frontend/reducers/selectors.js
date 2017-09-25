export const allTopics = ({ topics }) => Object.values(topics);

export const selectTopic = ({ topics }, id) => {
   const topic = topics[id] || {};
   return topic
};


export const allQuestions = ({ questions }) => {
   const returnQuestions = Object.values(questions) || [];
   return returnQuestions;
};

export const allAnswers = ({ answers }) => {
   const returnAnswers = Object.values(answers) || [];
   return returnAnswers;
};


export const selectQuestion = ({ questions }, id) => {
   const question = questions[id] || {};
   return question
};

export const selectAnswer = ({ answers }, id) => {
   const answer = answers[id] || {};
   return answer
};

//I filter here, since I might not have the query elsewhere
export const asSortedArray = ({ searchQuestions, filters }) => {
  const {query} = filters;
  const keywords = query.split(" ");
  return(
  Object.values(searchQuestions).sort((a,b)=>b.match_score - a.match_score)
  );
}
