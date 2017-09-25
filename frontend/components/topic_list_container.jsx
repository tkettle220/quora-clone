import { connect } from 'react-redux';
import { allTopics } from '../reducers/selectors';
import TopicList from './topic_list';

// Actions
import { fetchTopics } from '../actions/topic_actions';
import { voteOnAnswer } from '../actions/answer_actions';

const mapStateToProps = state => ({
  topics: allTopics(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTopics: () => dispatch(fetchTopics()),
  voteOnAnswer: (id, type) => dispatch(voteOnAnswer(id, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList);
