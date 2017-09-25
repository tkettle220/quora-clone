import React from 'react';
import {Link} from 'react-router-dom';

class QuestionSearchItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { question } = this.props;
    if (Object.keys(question).length === 0) {
      console.log("loading");
      return (
        <h1>Loading!</h1>
      );
    } else {
      const { body } = question;
      return (
        <li className="question-list-item">
          <Link to={`/questions/${question.id}`} activeClassName="active">{body}</Link>
        </li>
      );
    }
  }
}

export default QuestionSearchItem;
