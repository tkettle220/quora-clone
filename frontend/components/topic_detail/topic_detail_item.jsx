import React from 'react';

import QuestionItemContainer from '../question/question_item_container';
import FollowTopicButtonContainer from '../follow_topic_button/follow_topic_button_container'

class TopicDetailItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { topic } = this.props;
    const { id, name, description, num_followers, question_ids, follower_ids, followed} = topic;

      const questionItems = question_ids.map(id => (
        <QuestionItemContainer
          key={ "question-" + id }
          id={ id }
          />
      )
    );

    return (
      <div className="topic-detail-item">
        <h2 className="topic-header">{name}<p>{description}</p></h2>
        <FollowTopicButtonContainer id={id} followerIds={follower_ids} followed={followed}/>
        <ul className="question-list">{questionItems}</ul>
      </div>
    );

  }
}

export default TopicDetailItem;
