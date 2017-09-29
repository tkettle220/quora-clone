import React from 'react';
import {Link} from 'react-router-dom';


const QuestionSearchItem = ({ question, handleChange, updateFilter}) => {
  if (Object.keys(question).length === 0) {
    return (
      <img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />
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
