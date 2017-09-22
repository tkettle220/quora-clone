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
    const {topics} = this.props;
    const topicItems = topics.map( topic => (
      <TopicListItem key={ "topic-" + topic.id } topic={topic}/>
      ));
    return(
      <div>
        <h1>Topics You Follow:</h1>
        <ul className="topic-list">
          {topicItems}
        </ul>
      </div>
    );
  }
}

export default TopicList;
