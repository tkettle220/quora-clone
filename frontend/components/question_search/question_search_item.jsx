import React from 'react';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const processWord = (word, keywords) => {

  let foundMatch = false;
  let loweredWord = word.toLowerCase();
  for (var i = 0, len = word.length; i <= len; i++) {
    keywords.forEach((keyword) =>{
      if(loweredWord.substring(0,i) === keyword) {
        foundMatch = true;
      }

    });
    if(foundMatch) {
      break;
    }
  }

  if(foundMatch) {
    let highlighted = word.substring(0,i);
    let regular = word.slice(i);
    return (`<strong>${highlighted}</strong>` + regular);
  } else {
    return word
  }

}

const QuestionSearchItem = ({ question, handleChange, updateFilter, query}) => {
  if (Object.keys(question).length === 0) {
    return (
      <img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />
    );
  } else {
    const { body } = question;
    const keywords = query.toLowerCase().split(" ");
    const boldedBody = body.split(" ").map((word)=>processWord(word,keywords)).join(" ");
    return (
      <li className="question-list-item">
        <Link to={`/questions/${question.id}`}  onClick={()=>updateFilter("query", "")}>{ReactHtmlParser(boldedBody)}</Link>
        <i className="fa fa-angle-right" ></i>
      </li>
    );
  }
};


export default QuestionSearchItem;
