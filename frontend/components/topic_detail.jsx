import React from 'react';

import TopicListItem from './topic_list_item'

class TopicDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestTopic(this.props.topicId);
  }

  render() {
    const {topic, topicId} = this.props;
    if (Object.keys(topic).length === 0) {
      console.log("No topic, gotta load");
      return (<div>Loading</div>)
    } else {
      const topicItems = [topic].map( topic => (
        <TopicListItem key={ "topic-" + topic.id } topic={topic}/>
        ));

      return(
        <div id="topic-detail">
          <div className="topic-detail-header">
          </div>
          <ul className="topic-detail-questions">
            {topicItems}
          </ul>
        </div>
      );
    }

  }
}

export default TopicDetail;
