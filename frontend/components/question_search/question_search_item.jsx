import React from 'react';
import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



const processWord = (word) => {
  //manually go along a word one char at a time.  If it begins with one of the keywords, highlight the keyword
  let keywords = ["a", "Wh"]
  let foundMatch = false;
  for (var i = 0, len = word.length; i < len; i++) {
    keywords.forEach((keyword) =>{
      if(word.substring(0,i) === keyword) {
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
