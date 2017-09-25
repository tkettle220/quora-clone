import { connect } from 'react-redux';
import { selectDetailTopic } from '../../reducers/selectors';
import TopicDetail from './topic_detail';

// Actions
import { fetchTopic } from '../../actions/topic_actions';

const mapStateToProps = (state, {match}) => {
  const topicId = parseInt(match.params.topicId);
  const topic = selectDetailTopic(state, match.params.topicId);
  return {
    topicId,
    topic,
  }
};

const mapDispatchToProps = dispatch => ({
  requestTopic: (id) => dispatch(fetchTopic(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDetail);
