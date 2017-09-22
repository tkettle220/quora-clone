export const allTopics = ({ topics }) => Object.keys(topics).map(id => topics[id]);

export const allQuestions = ({ questions }) => Object.keys(questions).map(id => questions[id]);
