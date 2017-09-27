import React from 'react';


import TopicSearchInput from './topic_search_input';
import TopicSearchItem from './topic_search_item';


class TopicSearch extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {topics, query, updateFilter} = this.props
    const TopicItems = topics.map(topic => (
      <TopicSearchItem topic={topic} updateFilter={updateFilter} />
    ));

    return (
      <div className="topic-search">
        <TopicSearchInput
          className="search-input"
          query={query}
          updateFilter={updateFilter}
        />

      <ul className="topic-search-list">
           {TopicItems}
        </ul>
      </div>
    );

  }
}


export default TopicSearch;
