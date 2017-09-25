import React from 'react';

import TopicListItem from './topic_list_item'

class TopicList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    const {topics, voteOnAnswer, questions } = this.props;
    const topicItems = topics.map( topic => (
      <TopicListItem key={ "topic-" + topic.id } topic={topic} voteOnAnswer={voteOnAnswer} questions={questions}/>
      ));
    return(
      <div id="topics-container">
        <ul className="topic-list">
          {topicItems}
        </ul>
      </div>
    );
  }
}

export default TopicList;
