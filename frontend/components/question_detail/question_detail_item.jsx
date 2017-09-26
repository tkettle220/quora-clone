import React from 'react';

import AnswerItemContainer from '../answer_list/answer_item_container';
import AnswerFormContainer from '../answer_form/answer_form_container';

class QuestionDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { question, voteOnQuestion, followQuestion, unfollowQuestion } = this.props;
    const { id, body, follower_ids, answer_ids, tags} = question;
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
          <AnswerFormContainer questionId={id} />
        </div>
      );
    } else {
      const tagItems = tags.map(tag => <li>{tag}</li>);
      return (
        <div className="question-detail-item">
          <ul>
            Tags:
            {tagItems}
          </ul>
          <h2 className="question-header">{body}</h2>
            <button onClick={()=>followQuestion(id)}>Follow {follower_ids}</button>
            <button onClick={()=>unfollowQuestion(id)}>Unfollow</button>
            <button onClick={()=>voteOnQuestion(id, "downvote")}>Downvote
            </button>
            <button onClick={()=>voteOnQuestion(id, "cancel_vote")}>Cancel Downvote</button>

            <AnswerFormContainer id={id} />
          <ul className="answer-list">{answerItems}</ul>
        </div>
      )
    }

  }

}

export default QuestionDetailItem;