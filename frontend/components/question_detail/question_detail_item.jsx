import React from 'react';

import AnswerItem from '../answer_list/answer_item'

class QuestionDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { question, voteOnQuestion, followQuestion, unfollowQuestion } = this.props;
    const { id, body, answers, follower_ids} = question;
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
            <button onClick={()=>voteOnQuestion(id, "downvote")}>Downvote
            </button>
            <button onClick={()=>voteOnQuestion(id, "cancel_vote")}>Cancel Downvote</button>
            <button onClick={()=>followQuestion(id)}>Follow {follower_ids}</button>
            <button onClick={()=>unfollowQuestion(id)}>Unfollow</button>
          <ul className="answer-list">{answerItems}</ul>
        </div>
      )
    }

  }

}

export default QuestionDetailItem;
