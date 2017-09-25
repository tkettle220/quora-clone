import React from 'react';

import AnswerItemContainer from '../answer_list/answer_item_container'

class QuestionDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { question, voteOnQuestion, followQuestion, unfollowQuestion } = this.props;
    const { id, body, follower_ids, answer_ids} = question;
    const answerItems = answer_ids.map(id => (
      <AnswerItemContainer
        key={ "answer-" + id }
        id={id}
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
