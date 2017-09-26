import { connect } from 'react-redux';
import { selectComments } from '../../reducers/selectors';
import CommentList from './comment_list';

// Actions
import { fetchComments } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => ({
  comments: selectComments(state, ownProps.commentIds),
  type: ownProps.type,
  commentableId: ownProps.commentableId
});

const mapDispatchToProps = dispatch => ({
  requestComments: (type, commentableId) => dispatch(fetchComments(type, commentableId)),
  voteOnComment: (id, type) => dispatch(voteOnComment(id, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
