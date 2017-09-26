import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import AnswerVoteButtonContainer from '../answer_vote_button/answer_vote_button_container';


class AnswerItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestAnswer(this.props.id);
  }

  render () {
    const { answer, voteOnAnswer } = this.props;
    if (Object.keys(answer).length === 0) {
      console.log("Need to load answers");
      return(<h1>Loading Answers</h1>);
    } else {
      const {id, body, author, time_posted_ago, upvoter_ids, upvoted, downvoted} = answer;
      let answerBody;
      if(downvoted) {
        answerBody = <div><h2></h2>You downvoted this answer.<h3>Downvoting low-quality content improves Quera for everyone.</h3></div>
      } else {
        answerBody = ReactHtmlParser(body)
      }
      return (
        <li className="answer-item">
          <div className="answer-header">
            <img src={author.pro_pic_url} alt={`${author.name}'s picture`}  className="answerer-pro-pic" />
            <div className="answer-details">
              <h1>{author.name}</h1>
              <h2>Answered {time_posted_ago}</h2>
            </div>
          </div>
          <div className="answer-body">{answerBody}</div>
          <AnswerVoteButtonContainer id={id} upvoterIds={upvoter_ids} upvoted={upvoted} downvoted={downvoted}/>
        </li>
      );
    }
  }
}

export default AnswerItem;
