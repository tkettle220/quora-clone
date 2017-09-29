import React from 'react';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const processWord = (word) => {
  if(word.split("").includes("a")) {
    return word;
  } else {
    return `<strong>${word}</strong>`;
  }
}

const QuestionSearchItem = ({ question, handleChange, updateFilter}) => {
  if (Object.keys(question).length === 0) {
    return (
      <img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />
    );
  } else {
    const { body } = question;
    const boldedBody = body.split(" ").map(processWord).join(" ");
    return (
      <li className="question-list-item">
        <Link to={`/questions/${question.id}`}  onClick={()=>updateFilter("query", "")}>{ReactHtmlParser(boldedBody)}</Link>
        <i className="fa fa-angle-right" ></i>
      </li>
    );
  }
};


export default QuestionSearchItem;
