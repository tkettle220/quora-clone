import React from 'react';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { answer } = this.props;
    const {body, author, time_posted_ago} = answer;
    return (
      <li className="answer-item">
        <div className="answer-header">
          <img src={author.pro_pic_url} alt={`${author.name}'s picture`}  className="answerer-pro-pic" />
          <div className="answer-details">
            <h1>{author.name}</h1>
            <h2>Answered {time_posted_ago}</h2>
          </div>

        </div>
        <p className="answer-body">{body}</p>
      </li>
    );
  }
}

export default AnswerItem;
