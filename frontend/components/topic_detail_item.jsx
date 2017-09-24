import React from 'react';

import QuestionItem from './question_item'

class TopicDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { topic } = this.props;
    const { name, description, num_followers, questions} = topic;
    const questionItems = questions.map(question => (
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

export default TopicDetailItem;
