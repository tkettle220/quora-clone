import React from 'react';


class CommentListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { comment } = this.props;

    if(Object.keys(comment).length === 0) {
      console.log("Need to load comments");
      return(<h1>Loading Comments</h1>);
    } else {
      const { body, time_posted_ago, upvoted, downvoted, up_voter_ids, author} = comment;

      return (
        <li className="comment-list-item">
          <h2 className="comment-header">{author.name}</h2>
          <p>{body}</p>
        </li>
      );

    }

  }
}

export default CommentListItem;
