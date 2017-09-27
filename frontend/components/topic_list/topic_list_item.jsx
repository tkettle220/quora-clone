import React from 'react';
import {Link} from 'react-router-dom';

import QuestionItemContainer from '../question/question_item_container'

class TopicListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { topic } = this.props;

    if(Object.keys(topic).length === 0) {
      return(<h1>Loading Topics</h1>);
    } else {
      const { name, description, num_followers, question_ids} = topic;

      const questionItems = question_ids.map(id => (
        <QuestionItemContainer
          key={ "question-" + id }
          id={id}
          />
        ));

      return (
        <li className="topic-list-item">
          <h2 className="topic-header">{name}</h2>
          <ul className="question-list">{questionItems}</ul>
          <footer className="topic-list-item-footer">
            <Link to={`/topics/${topic.id}`} >View All</Link>
          </footer>
        </li>
      );

    }

  }
}

export default TopicListItem;
