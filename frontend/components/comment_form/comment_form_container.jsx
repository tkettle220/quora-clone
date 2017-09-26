import { connect } from 'react-redux';
import CommentForm from './answer_form';

import { withRouter } from 'react-router-dom';

// Actions
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  commentableId: ownProps.commentableId,
  commentableClass: ownProps.commentableClass
});

const mapDispatchToProps = dispatch => ({
  createComment: (commentableClass, commentableId, body) => dispatch(createComment(commentableClass, commentableId, body))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm));
