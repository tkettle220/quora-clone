import React from 'react';


class CommentListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { comment } = this.props;

    if(Object.keys(comment).length === 0) {
      return(<h1>Loading Comments</h1>);
    } else {
      const { body, time_posted_ago, upvoted, downvoted, up_voter_ids, author} = comment;

      return (
        <li className="comment-list-item">
          <div className="comment-header">
            <img src={author.pro_pic_url} alt={`${author.name}'s picture`}  className="commenter-pro-pic" />
            <div className="comment-details">
              <h1>{author.name}</h1>
              <h2>{time_posted_ago}</h2>
            </div>
          </div>
          <div className="comment-body">{body}</div>
        </li>
      );

    }

  }
}

export default CommentListItem;
