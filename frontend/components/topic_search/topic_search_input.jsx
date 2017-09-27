import React from 'react';

const handleChange = (filter, updateFilter) => e => {
  return (
  updateFilter(filter, e.currentTarget.value)
  );
}

const TopicSearchInput = ({ topicQuery, updateFilter}) => (
  <input type="text" className="topic-search-bar" rows="1" placeholder="Search for Topics" value={topicQuery} onChange={handleChange('topicQuery', updateFilter)}></input>
);

export default TopicSearchInput;
