import React from 'react';
import {Link} from 'react-router-dom';


const clickSearch = (closeSearch, updateFilter) => {
  closeSearch();
  updateFilter("topicQuery", "");
}

const TopicSearchItem = ({ topic, handleChange, updateFilter, closeSearch}) => {
  if (Object.keys(topic).length === 0) {
    return (
      <img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />
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
