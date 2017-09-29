import React from 'react';
import AnswerItemContainer from '../answer_list/answer_item_container';
import { Link } from 'react-router-dom';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestQuestion(this.props.id);
  }



  render () {
    const { question } = this.props;
    if (Object.keys(question).length === 0) {

      return(<img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />);
    } else {

      const { id, body, author, answer_ids} = question;

      const answerItems = answer_ids.map( id => (
        <AnswerItemContainer key={ "answer-" + id } id={id}/>
      ));

      if(answerItems.length === 0) {
        return (
          <li className="question-item">
            <Link to={`/questions/${id}`}  className="question-header">{body}</Link>
            <h1 className="no-answers-message">No answers written for this question yet</h1>
          </li>
        )
      } else {
        return (
          <li className="question-item">
            <Link to={`/questions/${id}`} className="question-header">{body}</Link>
            <ul className="answer-list">
              {answerItems[0]}
            </ul>
          </li>
        );
      }



    }

  }
}

export default QuestionItem;
