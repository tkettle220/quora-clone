import React from 'react';

import QuestionDetailItem from './question_detail_item'

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestQuestion(this.props.questionId);
    window.scrollTo(0, 0);
  }

  render() {
    const {question, questionId} = this.props;
    if (Object.keys(question).length === 0) {
      console.log("No question, gotta load");
      return (<div>Loading</div>)
    } else {
      return(
        <QuestionDetailItem key={ "question-" + question.id } question={question}/>
      );
    }

  }
}

export default QuestionDetail;
