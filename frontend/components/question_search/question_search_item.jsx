import React from 'react';
import {Link} from 'react-router-dom';


const QuestionSearchItem = ({ question, handleChange, updateFilter}) => {
  if (Object.keys(question).length === 0) {
    return (
      <h1>Loading!</h1>
    );
  } else {
    const { body } = question;

    return (
      <li className="question-list-item">
        <Link to={`/questions/${question.id}`}  onClick={()=>updateFilter("query", "")}>{body}</Link>
        <i className="fa fa-angle-right" ></i>
      </li>
    );
  }
};


export default QuestionSearchItem;
