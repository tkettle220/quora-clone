import React from 'react';

import CommentListItem from './comment_list_item'

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.requestComments(this.props.commentableId, this.props.type);
  }

  render() {
    const { comments, voteOnComment } = this.props;
    const commentItems = comments.map( comment => (
      <CommentListItem key={ "comment-" + comment.id } comment={comment} voteOnComment={voteOnComment} />
      ));
    return(
      <div id="comments-container">
        <ul className="comment-list">
          {commentItems}
        </ul>
      </div>
    );
  }
}

export default CommentList;
