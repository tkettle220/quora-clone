import React from 'react';

import QuestionListItem from './question_list_item'

class QuestionList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestQuestions();
  }

  render() {
    const {questions} = this.props;
    const questionItems = questions.map( question => (
      <QuestionListItem key={ "question-" + question.id } question={question}/>
      )).reverse();
    return(
      <div id="questions-container">
        <ul className="question-list">
          {questionItems}
        </ul>
      </div>
    );
  }
}

export default QuestionList;
