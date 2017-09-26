import { connect } from 'react-redux';
import QuestionButtons from './question_buttons';

// Actions
import { followQuestion, unfollowQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  followerIds: ownProps.followerIds
});

const mapDispatchToProps = dispatch => ({
  followQuestion: (id) => dispatch(followQuestion(id)),
  unfollowQuestion: (id) => dispatch(unfollowQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionButtons);
