import React from 'react';

const handleChange = (filter, updateFilter, openModal) => e => {
  // openModal();
  return (
  updateFilter(filter, e.currentTarget.value)
  );
}

const QuestionSearchInput = ({ query, updateFilter, openModal }) => (
  <input type="text" className="question-search-bar" rows="1" placeholder="Search Quera" onChange={handleChange('query', updateFilter, openModal)}></input>
);

export default QuestionSearchInput;
