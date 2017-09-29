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

  //need this to reload  questions if the search bar question link is clicked
  componentWillUpdate(nextProps) {
    if (nextProps.questionId && this.props.questionId != nextProps.questionId) {
      nextProps.requestQuestion(nextProps.questionId);
      window.scrollTo(0, 0);
    }
  }



  render() {
    const {question, questionId, voteOnQuestion, followQuestion, unfollowQuestion} = this.props;

    if (Object.keys(question).length === 0) {
      return (<img src="https://image.ibb.co/iYo1yw/Screen_Shot_2017_09_28_at_6_43_28_PM.png" alt={`loading-image`}  className="loading-image" />)
    } else {
      return(
        <QuestionDetailItem key={ "question-" + question.id } question={question}
        voteOnQuestion={voteOnQuestion}
        followQuestion={followQuestion}
        unfollowQuestion={unfollowQuestion}/>
      );
    }

  }
}

export default QuestionDetail;
