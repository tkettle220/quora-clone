import React from 'react';
import {Link} from 'react-router-dom';

import AnswerItemContainer from '../answer_list/answer_item_container';
import AnswerFormContainer from '../answer_form/answer_form_container';

import QuestionButtonsContainer from '../question_buttons/question_buttons_container';


class QuestionDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    const { question, voteOnQuestion } = this.props;
    const { id, body, follower_ids, answer_ids, tags, followed, downvoted} = question;
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
          <h3 className="no-answers-message">No answers for this question written yet!</h3>
          <AnswerFormContainer questionId={id} />
        </div>
      );
    } else {
      const tagItems = tags.map(tag => <Link to={`/topics/${tag[0]}`} >{tag[1]}</Link>);
      return (
        <div className="question-detail-item">
          <h2 className="question-header">{body}</h2>
          <ul className="tags">
            {tagItems}
          </ul>
            <QuestionButtonsContainer id={id} followerIds={follower_ids} followed={followed} downvoted={downvoted}/>

          <ul className="answer-list">{answerItems}</ul>
        </div>
      )
    }

  }

}

export default QuestionDetailItem;
