import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asSortedTopicArray } from '../../reducers/selectors';
import TopicSearch from './topic_search';

const mapStateToProps = (state, ownProps) => ({
  topics: asSortedTopicArray(state),
  topicQuery: state.filters.topicQuery,
  closeSearch: ownProps.closeSearch
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicSearch);
