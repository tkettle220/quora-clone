import React from 'react';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { answer } = this.props;
    const {body, author} = answer;
    return (
      <li>
        <img src={author.pro_pic_url} alt={`${author.name}'s picture`}  className="answerer-pro-pic" />
        <h1>{author.name}</h1>
        <p>{body}</p>
      </li>
    );
  }
}

export default AnswerItem;
