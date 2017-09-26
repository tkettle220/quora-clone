import { connect } from 'react-redux';
import { selectComments } from '../../reducers/selectors';
import CommentList from './comment_list';

// Actions
import { fetchComments } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => ({
  comments: selectComments(state, ownProps.commentIds)
});

const mapDispatchToProps = dispatch => ({
  requestComments: () => dispatch(fetchComments()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
