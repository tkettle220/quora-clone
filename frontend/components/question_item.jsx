import React from 'react';
import AnswerItem from './answer_item'

class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.requestAnswers(this.props.question.id);
  }

  render () {
    const { question } = this.props;
    const { id, body, author, answers} = question;
    const answerItems = answers.map( answer => (
      <AnswerItem key={ "answer-" + answer.id } answer={answer}/>
      ));
    return (
      <li>
        <h1>{body}</h1>
        <ul className="topic-list">
          {answerItems}
        </ul>
      </li>
    );
  }
}

export default QuestionItem;
