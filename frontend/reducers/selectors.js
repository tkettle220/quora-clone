export const allTopics = ({ topics }) => Object.keys(topics).map(id => topics[id]);

export const selectTopic = ({ topics }, id) => {
   const topic = topics[id] || {};
   return topic
};

export const allQuestions = ({ questions }) => Object.keys(questions).map(id => questions[id]);

export const selectQuestion = ({ questions }, id) => {
   const question = questions[id] || {};
   return question
};

export const asSortedArray = ({ searchQuestions, filters }) => {
  const {query} = filters;
  const keywords = query.split(" ");
  return(
  Object.values(searchQuestions).sort((a,b)=>b.match_score - a.match_score)
  );
}
