import React from 'react';

const handleChange = (filter, updateFilter) => e => {
  return (
  updateFilter(filter, e.currentTarget.value)
  );
}

const QuestionSearchInput = ({ query, updateFilter}) => (
  <input type="text" className="question-search-bar" rows="1" placeholder="Search Quera" value={query} onChange={handleChange('query', updateFilter)}></input>
);

export default QuestionSearchInput;
