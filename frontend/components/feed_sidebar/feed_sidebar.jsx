import React from 'react';
import {Link} from 'react-router-dom';
import TopicSearchContainer from '../topic_search/topic_search_container';


class FeedSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchOpen: false}
  }

  componentWillMount() {
    this.props.requestTopics();
  }

  topicSearch() {
    if(this.state.searchOpen) {
      return <TopicSearchContainer />
    }
  }

  render() {
    console.log("Feed sidebar is rendering");
    const {topics} = this.props;
    let buttonTxt = "Search topics";
    if(this.state.searchOpen) {
      buttonTxt = "Done";
    }
    const topicItems = topics.map( topic => (
      <li key={ "topic-" + topic.id }><Link to={`/topics/${topic.id}`} activeClassName="active">{topic.name}</Link>
</li>
      ));
    return(
        <div className="feed-sidebar">
          <div className="feed-sidebar-header">
            <h2>Feeds</h2>
              <button onClick={()=>this.setState({searchOpen: !this.state.searchOpen})}>{buttonTxt}</button>
              {this.topicSearch()}
          </div>


          <ul className="sidebar-topic-list">
            {topicItems}
          </ul>
        </div>
    );
  }
}

export default FeedSidebar;
