import { connect } from 'react-redux';
import { allTopics } from '../reducers/selectors';
import FeedSidebar from './feed_sidebar';

// Actions
import { fetchTopics } from '../actions/topic_actions';

const mapStateToProps = state => ({
  topics: allTopics(state),
});

const mapDispatchToProps = dispatch => ({
  requestTopics: () => dispatch(fetchTopics())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedSidebar);
