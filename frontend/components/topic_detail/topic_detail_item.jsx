import React from 'react';

import QuestionItem from '../question/question_item'

class TopicDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { topic, questions} = this.props;
    const { name, description, num_followers, question_ids} = topic;
    if (questions.length === 0) {
      console.log("No topic, gotta load");
      return (<div>Loading</div>)
    } else {
        const topic_questions = questions.filter(question => topic.question_ids.includes(question.id))
        const questionItems = topic_questions.map(question => (
          <QuestionItem
            key={ "question-" + question.id }
            question={ question }

            />
        )
      );

      return (
        <div className="topic-detail-item">
          <h2 className="topic-header">{name}<p>{description}</p></h2>
          <ul className="question-list">{questionItems}</ul>
        </div>
      );
    }
  }
}

export default TopicDetailItem;
