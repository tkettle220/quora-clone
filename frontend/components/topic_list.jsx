import React from 'react';

class TopicList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestTopics();
  }

  render() {
    const {topics} = this.props;
    const topicItems = topic.map( topic => (
      <TopicListItem key={ "topic-" + topic.id } topic={topic}/>
      ));
    return(
      <div>
        <ul className="topic-list">
          {topicItems}
        </ul>
      </div>
    );
  }
}

export default TopicList;
