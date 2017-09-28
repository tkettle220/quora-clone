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
    if(Object.keys(questions).length === 0) {
      return(<h1>Loading Questions!</h1>);
    } else {
      const questionItems = questions.map( question => (
        <QuestionListItem key={ "question-" + question.id } question={question}/>
      )).reverse();
      return(
        <div id="questions-container">
          <h1><i className="fa fa-star" ></i> Top Questions for You</h1>
          <ul className="question-list">
            {questionItems}
          </ul>
        </div>
      );

    }
  }
}

export default QuestionList;
