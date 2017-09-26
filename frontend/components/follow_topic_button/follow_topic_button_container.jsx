import { connect } from 'react-redux';
import FollowTopicButton from './follow_topic_button';

// Actions
import { followTopic, unfollowTopic } from '../../actions/topic_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  followerIds: ownProps.followerIds,
  followed: ownProps.followed

});

const mapDispatchToProps = dispatch => ({
  followTopic: (id) => dispatch(followTopic(id)),
  unfollowTopic: (id) => dispatch(unfollowTopic(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowTopicButton);
