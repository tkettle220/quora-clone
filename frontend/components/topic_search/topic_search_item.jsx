import React from 'react';
import {Link} from 'react-router-dom';


const TopicSearchItem = ({ topic, handleChange, updateFilter}) => {
  if (Object.keys(topic).length === 0) {
    console.log("loading");
    return (
      <h1>Loading!</h1>
    );
  } else {
    const { name } = topic;

    return (
      <li className="topic-list-item">
        <Link to={`/topics/${topic.id}`} activeClassName="active" onClick={()=>updateFilter("topicQuery", "")}>{name}</Link>
      </li>
    );
  }
};


export default TopicSearchItem;
