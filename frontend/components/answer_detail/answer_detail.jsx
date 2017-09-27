import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

import AnswerVoteButtonContainer from '../answer_vote_button/answer_vote_button_container';


class AnswerDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestAnswer(this.props.id);
    window.scrollTo(0, 0);
  }

  render () {
    const { answer, voteOnAnswer } = this.props;

    if (Object.keys(answer).length === 0) {
      return(<h1>Loading Answers</h1>);
    } else {
      const {id, body, author, time_posted_ago, upvoter_ids, question} = answer;
      return (
        <div className="answer-detail-view">
          <Link to={`/questions/${question.id}`}  >{question.body}</Link>
          <div className="answer-header">
            <img src={author.pro_pic_url} alt={`${author.name}'s picture`}  className="answerer-pro-pic" />
            <div className="answer-details">
              <h1>{author.name}</h1>
              <h2>Answered {time_posted_ago}</h2>
            </div>
          </div>

          <div className="answer-body">{ReactHtmlParser(body)}</div>
          <AnswerVoteButtonContainer id={id} upvoterIds={upvoter_ids}/>

        </div>


      );
    }
  }
}

export default AnswerDetail;
