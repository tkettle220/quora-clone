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
      return(<img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />);
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
