import { connect } from 'react-redux';
import FollowTopicButton from './follow_topic_button';

// Actions
import { voteOnAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
});

const mapDispatchToProps = dispatch => ({
  voteOnAnswer: (id, type) => dispatch(voteOnAnswer(id, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowTopicButton);
