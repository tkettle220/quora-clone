import { connect } from 'react-redux';
import { allTopics } from '../reducers/selectors';
import TopicList from './topic_list';

// Actions
import { fetchTopics } from '../actions/topic_actions';

const mapStateToProps = state => ({
  topics: allTopics(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTopics: () => dispatch(fetchTopics())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList);
