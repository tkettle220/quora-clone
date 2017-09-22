import React from 'react';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { question } = this.props;
    const { body, author} = question;
    return (
      <li>
        <h1>{body}</h1>
      </li>
    );
  }
}

export default QuestionItem;
