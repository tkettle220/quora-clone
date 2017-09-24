import React from 'react';
import AnswerItem from './answer_item'
import { Link } from 'react-router-dom';

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
      <li className="question-item">
        <Link to={`/questions/${id}`} activeClassName="active" className="question-header">{body}</Link>
        <ul className="answer-list">
          {answerItems[0]}
        </ul>
      </li>
    );
  }
}

export default QuestionItem;
