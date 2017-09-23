import React from 'react';
import {Link} from 'react-router-dom';


class FeedSidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //   this.props.requestTopics();
  // }

  render() {
    const {topics} = this.props;
    const topicItems = topics.map( topic => (
      <li key={ "topic-" + topic.id }><Link to={`/topics/${topic.id}`} activeClassName="active">{topic.name}</Link>
</li>
      ));
    return(
        <div className="feed-sidebar">
          <h2>Feeds</h2>
          <ul className="sidebar-topic-list">
            {topicItems}
          </ul>
        </div>
    );
  }
}

export default FeedSidebar;
