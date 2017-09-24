import React from 'react';

import AnswerItem from './answer_item'

class QuestionDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { question } = this.props;
    const { body, answers} = question;
    const answerItems = answers.map(answer => (
      <AnswerItem
        key={ "answer-" + answer.id }
        answer={ answer }
        />
      )
    );

    if(answerItems.length === 0) {
      return (
        <div className="question-detail-item">
          <h2 className="question-header">{body}</h2>
          <h3>No answers for this question written yet!</h3>
        </div>
      );
    } else {
      return (
        <div className="question-detail-item">
          <h2 className="question-header">{body}</h2>
          <ul className="answer-list">{answerItems}</ul>
        </div>
      )
    }

  }

}

export default QuestionDetailItem;
