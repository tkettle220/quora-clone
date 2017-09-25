import { connect } from 'react-redux';
import { selectTopic, allQuestions } from '../../reducers/selectors';
import TopicDetail from './topic_detail';

// Actions
import { fetchTopic } from '../../actions/topic_actions';
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = (state, {match}) => {
  const topicId = parseInt(match.params.topicId);
  const topic = selectTopic(state, match.params.topicId);
  const questions = allQuestions(state);
  return {
    topicId,
    topic,
    questions
  }
};

const mapDispatchToProps = dispatch => ({
  requestTopic: (id) => dispatch(fetchTopic(id)),
  requestQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDetail);
