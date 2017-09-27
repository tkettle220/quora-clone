import { connect } from 'react-redux';
import { allTopics } from '../../reducers/selectors';
import FeedSidebar from './feed_sidebar';

// Actions
import { fetchTopics } from '../../actions/topic_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  topics: allTopics(state),
});

const mapDispatchToProps = dispatch => ({
  requestTopics: () => dispatch(fetchTopics()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedSidebar);
