import React from 'react';
import {Link} from 'react-router-dom';


const clickSearch = (closeSearch, updateFilter) => {
  closeSearch();
  updateFilter("topicQuery", "");
}

const TopicSearchItem = ({ topic, handleChange, updateFilter, closeSearch}) => {
  if (Object.keys(topic).length === 0) {
    console.log("loading");
    return (
      <h1>Loading!</h1>
    );
  } else {
    const { name } = topic;

    return (
      <li className="topic-search-list-item">
        <Link to={`/topics/${topic.id}`} onClick={()=>clickSearch(closeSearch, updateFilter)}>{name}</Link>
      </li>
    );
  }
};


export default TopicSearchItem;
