import { connect } from 'react-redux';
import AnswerVoteButton from './answer_vote_button';

// Actions
import { voteOnAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  upvoterIds: ownProps.upvoterIds,
  upvoted: ownProps.upvoted,
  downvoted: ownProps.downvoted
});

const mapDispatchToProps = dispatch => ({
  voteOnAnswer: (id, type) => dispatch(voteOnAnswer(id, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerVoteButton);
