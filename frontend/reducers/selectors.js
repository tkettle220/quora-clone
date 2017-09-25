export const allTopics = ({ topics }) => Object.values(topics);

export const selectTopic = ({ topics }, id) => {
   const topic = topics[id] || {};
   return topic
};

export const allQuestions = ({ questions }) => Object.values(questions);

export const selectQuestion = ({ questions }, id) => {
   const question = questions[id] || {};
   return question
};

//I filter here, since I might not have the query elsewhere
export const asSortedArray = ({ searchQuestions, filters }) => {
  const {query} = filters;
  const keywords = query.split(" ");
  return(
  Object.values(searchQuestions).sort((a,b)=>b.match_score - a.match_score)
  );
}
